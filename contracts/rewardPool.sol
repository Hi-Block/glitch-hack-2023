// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RewardPool {
    uint private rewardPool = 0;

    mapping(address => bool) private hasClaimed;

    event Deposit(address indexed user, uint256 amount);
    event Claim(address indexed user, uint256 amount);

    constructor() {
        // You can add any initialization code here if needed
    }

    function deposit(uint _amount) external payable {
        require(_amount > 0, "Invalid amount"); // Ensure a positive deposit amount
        rewardPool += _amount;
        emit Deposit(msg.sender, _amount);
    }

    function claim(uint256 _amount) external {
        require(_amount > 0, "Invalid amount"); // Ensure a positive claim amount
        require(rewardPool >= _amount, "Insufficient reward pool balance"); // Ensure there are enough rewards in the pool
        require(!hasClaimed[msg.sender], "Already claimed"); // Ensure the user has not already claimed
        (bool success, ) = msg.sender.call{value: _amount}("");
        require(success, "ERROR");
        rewardPool -= _amount;
        // hasClaimed[msg.sender] = true;
        // payable(msg.sender).transfer(_amount);
        emit Claim(msg.sender, _amount);
    }

    function getRewardPoolBalance() external view returns (uint256) {
        return rewardPool;
    }

    function getUserClaimStatus(address user) external view returns (bool) {
        return hasClaimed[user];
    }
}