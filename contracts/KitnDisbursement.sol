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

    // Mapping to store allowances and validity for each user
    User public user;

    // Struct to represent a user with an allowance and validity period
    struct User {
        address userAddress;
        uint allowance;
        uint validity;
    }

    // Events for logging actions within the contract
    event AllowanceRenewed(
        address indexed user,
        uint allowance,
        uint timeLimit
    );
    event CoinsSpent(address indexed receiver, uint amount);

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

    // Function to renew or set a user's allowance and validity, restricted to owner
    function renewAllowance(uint _allowance, uint _timeLimit) public onlyOwner {
        uint validity = block.timestamp + _timeLimit; // Set validity based on current time and time limit
        user = User(msg.sender, _allowance, validity); // Update the user's allowance and validity
        emit AllowanceRenewed(msg.sender, _allowance, _timeLimit); // Log the allowance renewal
    }

    // Function for users to check their current allowance
    function myAllowance() public view returns (uint) {
        return user.allowance;
    }

    // Function to spend coins from allowance within the validity period
    function spendCoins(address _receiver, uint _amount) public {
        require(block.timestamp < user.validity, "Validity expired!!");
        require(_amount <= user.allowance, "Allowance not sufficient!!");

        // Deduct the amount from the user's allowance
        user.allowance -= _amount;

        // Transfer KITN tokens from this contract to the _receiver
        require(
            kitnToken.transfer(_receiver, _amount),
            "Token transfer failed"
        );

        emit CoinsSpent(_receiver, _amount);
    }
}
