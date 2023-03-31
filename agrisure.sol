pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Agrisure is ERC20 {
    address payable insurer;
    uint256 premium;
    uint256 minimumRainfall;
    mapping(address => bool) isPolicyholder;
    mapping(address => bool) hasClaimed;
    
    constructor(uint256 _totalSupply, uint256 _premium, uint256 _minimumRainfall) ERC20("Agrisure", "AGS") {
        insurer = payable(msg.sender);
        premium = _premium;
        minimumRainfall = _minimumRainfall;
        _mint(msg.sender, _totalSupply);
    }
    
    function buyInsurance() public {
        require(balanceOf(msg.sender) >= premium, "Insufficient balance to buy insurance");
        isPolicyholder[msg.sender] = true;
        hasClaimed[msg.sender] = false;
        _burn(msg.sender, premium);
    }
    
    function claimInsurance(uint256 amount) public {
        require(isPolicyholder[msg.sender], "Sender is not a policyholder");
        require(!hasClaimed[msg.sender], "Sender has already claimed insurance");
        require(5 < minimumRainfall, "Temperature is above minimum threshold");
        hasClaimed[msg.sender] = true;
        _mint(msg.sender, amount);
    }
    
    function setMinimumRainfall(uint256 _minimumRainfall) public {
        require(msg.sender == insurer, "Only insurer can set minimum temperature");
        minimumRainfall = _minimumRainfall;
    }
    
    function withdrawPremium() public {
        require(msg.sender == insurer, "Only insurer can withdraw premiums");
        payable(msg.sender).transfer(address(this).balance);
    }

    function buyAGS(uint256 _amount) public payable {
        require(_amount > 0, "Amount must be greater than zero");
        _mint(msg.sender, _amount);
    }
    
}