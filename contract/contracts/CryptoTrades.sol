//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0; 

import { ReentrancyGuard } from "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "./NftCollectiable.sol";
import "./NftFraction.sol";

contract CryptoTrades is ReentrancyGuard {
	function createCollection(string memory name, string memory symbol, string memory baseUri) public {
		NftCollectible new_collection = new NftCollectible(name, symbol, baseUri);
		new_collection.transferOwnership(msg.sender);
		emit NftCollectionCreated(address(new_collection));
	}
	function fractionalize(address _target, uint256 _tokenId, string memory _name, string memory _symbol, uint256 _fractionsCount, uint256 _fractionPrice) external nonReentrant returns (address _fractions)
	{
		address _from = msg.sender;
		NftFraction new_fraction = new NftFraction();
		new_fraction.initialize(_from, _target, _tokenId, _name, _symbol, _fractionsCount, _fractionPrice);
		emit Fractionalized(_from, _target, _tokenId, address(new_fraction));
		return address(new_fraction);
	}

	event NftCollectionCreated(address indexed new_collection);
	event Fractionalized(address indexed _from, address indexed _target, uint256 indexed _tokenId, address _fractions);
}