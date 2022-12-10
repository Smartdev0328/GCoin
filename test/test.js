const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("GCoin", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  it("Deploy & Mint", async function () {
    // const [owner] = await ethers.getSigner();
     const token = await ethers.getContractFactory("GCoin");
     const tokenContract = await token.deploy(ethers.utils.parseEther("23000000"));
     //test deposit function
     expect(await tokenContract.balanceOf(token.signer.getAddress())).to.equal(ethers.utils.parseEther("23000000"));
     
     await ethers.provider.send("evm_increaseTime", [3600*24*3]);
     await tokenContract.mint(ethers.utils.parseEther("10"));
     await ethers.provider.send("evm_increaseTime", [3600*24*3]);
     expect(await tokenContract.balanceOf(token.signer.getAddress())).to.equal(ethers.utils.parseEther("23000010"));
     //expect(await ethers.provider.getBalance(tokenContract.address)).to.equal(ethers.utils.parseEther("30"));
   });

});
