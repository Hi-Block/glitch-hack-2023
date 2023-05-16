// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Reserve {
    struct WithdrawalRequest {
        address requester;
        uint256 amount;
        bool approved;
    }

    mapping(address => uint256) private balances;
    mapping(address => WithdrawalRequest) private withdrawalRequests;

    event Deposit(address indexed user, uint256 amount);
    event WithdrawalRequestCreated(address indexed user, uint256 amount);
    event WithdrawalRequestApproved(address indexed user, uint256 amount);
    event Withdrawal(address indexed user, uint256 amount);

    // Deposit for survey uploader
    function deposit() external payable {
        require(msg.value > 0, "Invalid amount"); // Ensure a positive deposit amount

        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    // Access here after completing survey
    function createWithdrawalRequest(uint256 amount) external {
        require(amount > 0, "Invalid amount"); // Ensure a positive withdrawal amount
        require(balances[msg.sender] >= amount, "Insufficient balance"); // Ensure the user has enough balance

        withdrawalRequests[msg.sender] = WithdrawalRequest(msg.sender, amount, false);
        emit WithdrawalRequestCreated(msg.sender, amount);
    }

    // After survey is completed, approve participant to withdraw specific amount of funds
    function approveWithdrawalRequest(address requester) external {
        require(msg.sender == requester, "Unauthorized"); // Ensure only the depositor can approve the request
        require(withdrawalRequests[requester].amount > 0, "No withdrawal request found"); // Ensure a valid withdrawal request exists

        withdrawalRequests[requester].approved = true;
        emit WithdrawalRequestApproved(requester, withdrawalRequests[requester].amount);
    }

    // Execute withdrawal
    function withdraw() external {
        require(withdrawalRequests[msg.sender].approved, "Withdrawal not approved"); // Ensure the withdrawal request is approved

        uint256 amount = withdrawalRequests[msg.sender].amount;
        balances[msg.sender] -= amount;
        delete withdrawalRequests[msg.sender];
        payable(msg.sender).transfer(amount);
        emit Withdrawal(msg.sender, amount);
    }

    // Get balance
    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }

    // Get withdrawal request
    function getWithdrawalRequest(address user) external view returns (uint256, bool) {
        WithdrawalRequest memory request = withdrawalRequests[user];
        return (request.amount, request.approved);
    }
}