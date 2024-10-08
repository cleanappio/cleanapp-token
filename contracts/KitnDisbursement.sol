// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KitnDisbursement {
    // KITN token, initialized in the constructor
    IERC20 public kitnToken;

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
    constructor(address _kitnAddress) {
        owner = msg.sender;
        kitnToken = IERC20(_kitnAddress);
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

    function transferKitnToMe(uint _amount) public onlyOwner {
        kitnToken.transferFrom(owner, address(this), _amount);
    }

    // Function to spend coins from allowance within the validity period
    function spendCoins(
        address[] calldata _receivers,
        uint[] calldata _amounts
    ) public onlyOwner {
        // Transfer KITN tokens from this contract to the _receiver
        require(
            _receivers.length == _amounts.length,
            "A number of receivers must be equal to a number of amounts"
        );
        CoinsSpendResult[] memory results = new CoinsSpendResult[](
            _receivers.length
        );
        // Sum KITNs in the batch, check that there are enough funds.abi
        uint256 totalAmount = 0;
        for (uint256 i = 0; i < _receivers.length; i++) {
            totalAmount += _amounts[i];
        }
        require(
            totalAmount <= kitnToken.balanceOf(address(this)),
            "Not enough KITNs on the contract to complete the batch"
        );
        for (uint256 i = 0; i < _receivers.length; i++) {
            results[i].receiver = _receivers[i];
            results[i].amount = _amounts[i];
            results[i].result = kitnToken.transfer(_receivers[i], _amounts[i]);
        }

        emit CoinsSpent(results);
    }
}
