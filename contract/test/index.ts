import { expect } from "chai";
import { ethers } from "hardhat";


/* describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
}); */

describe("CryptoTrades", function () {
  before(async function () {
    
  });
  it("CryptoTrade Test", async function () {
    const CryptoTrades = await ethers.getContractFactory("CryptoTrades");
    const [owner, addr] = await ethers.getSigners();
  
    const ct = await CryptoTrades.deploy();
    //await ct.createCollection("NFT Collection", "NFTC", "https://protomock.com:5000/item/view/NFTC/", address(0xB1F405a0c5fa7a0DA5915A70b5619Aa9C2344C2b));
    await ct.connect(addr).fractionalize("0xB1F405a0c5fa7a0DA5915A70b5619Aa9C2344C2b", 1, "NFT Fraction", "NFTF", 10000, 1000);
  });
});

/* describe("NftColllectible", function () {
  it("NftColllectible Test", async function () {
    const NftColllectible = await ethers.getContractFactory("NFTCollectible");
    const nc = await NftColllectible.deploy("NFT Collection", "NFTC", "https://protomock.com:5000/item/view/NFTC/");
    await nc.deployed();
    await nc.transferOwnership("0xB1F405a0c5fa7a0DA5915A70b5619Aa9C2344C2b");
  });
}); */

/* describe("NftFraction", function () {
  it("NftFraction Test", async function () {
    const NftColllectible = await ethers.getContractFactory("NFTCollectible");
    const nc = await NftColllectible.deploy("NFT Collection", "NFTC", "https://protomock.com:5000/item/view/NFTC/");
    await nc.deployed();
    await nc.transferOwnership("0xB1F405a0c5fa7a0DA5915A70b5619Aa9C2344C2b");
  });
}); */