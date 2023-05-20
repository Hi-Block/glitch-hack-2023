// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RewardPools {
    mapping(address => uint256) private rewardPool;
    mapping(address => bool) private hasClaimed;

    event Deposit(address indexed user, uint256 amount);
    event Claim(address indexed user, uint256 amount);

    constructor() {
        // You can add any initialization code here if needed
    }

    function deposit() external payable {
        require(msg.value > 0, "Invalid amount"); // Ensure a positive deposit amount
        rewardPool[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function claim(address uploader, uint _amount) external {
        require(rewardPool[uploader] > 0, "Invalid amount"); // Ensure a positive claim amount
        require(rewardPool[uploader] >= _amount, "Insufficient balance"); // Ensure the user has enough balance
        require(!hasClaimed[msg.sender], "Already claimed"); // Ensure the user has not already claimed

        hasClaimed[msg.sender] = true;
        if (rewardPool[uploader] > _amount) {
            rewardPool[uploader] -= _amount;
        }
        
        payable(msg.sender).transfer(_amount);
        emit Claim(msg.sender, _amount);
    }

    function getPoolBalance(address uploader) external view returns (uint256) {
        uint _amount = rewardPool[uploader]; 
        return _amount;
    }
}