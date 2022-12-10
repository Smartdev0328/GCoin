// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GCoin is ERC20, Ownable {
    
    event Minted(address minter, uint256 amount);

    constructor(uint256 initialSupply) ERC20("GCoin", "GCN") {
        _mint(_msgSender(), initialSupply);
    }

    function mint(uint256 amount) external onlyOwner {
        _mint(_msgSender(), amount);
        emit Minted(_msgSender(), amount);
    }
}