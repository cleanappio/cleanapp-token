// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KitnDisbursement {
    // Token contract address for KITN tokens
    address public constant KITN_ADDRESS =
        0xE5a0F6BCCBF606718D3E7844E64Bf9c34727EA33;
    IERC20 public kitnToken = IERC20(KITN_ADDRESS);

    // State variable to store the owner of the contract
    address public owner;

    struct CoinsSpendResult {
        address receiver;
        uint amount;
        bool result;
    }

    event CoinsSpent(CoinsSpendResult[] results);

    // Modifier to restrict function access to the owner of the contract
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    // Constructor sets the deploying address as the owner of the contract
    constructor() {
        owner = msg.sender;
    }

    // Function to allow the contract to receive ether, but only from the owner
    receive() external payable onlyOwner {}

    // Function to check the contract's balance
    function getWalletBalance() public view returns (uint) {
        return address(this).balance;
    }

    // Function to check the contract's balance
    function getKitnBalance() public view returns (uint) {
        return kitnToken.balanceOf(address(this));
    }

    // Function to spend coins from allowance within the validity period
    function spendCoins(address[] calldata _receivers, uint[] calldata _amounts) public onlyOwner {
        // Transfer KITN tokens from this contract to the _receiver
        require(
            _receivers.length == _amounts.length,
            "A number of receivers must be equal to a number of amounts"
        );
        CoinsSpendResult[] memory results = new CoinsSpendResult[](_receivers.length);
        for (uint256 i = 0; i < _receivers.length; i++) {
            results[i].receiver = _receivers[i];
            results[i].amount = _amounts[i];
            results[i].result = kitnToken.transfer(_receivers[i], _amounts[i]);
        }

        emit CoinsSpent(results);
    }
}
