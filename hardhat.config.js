require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};

const GOERLI_PRIVATE_KEY = "ab07daac665b982cc6a2988f179c7e2602bf11175ea11b7a21bde9b8a93bdb2e";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://goerli.optimism.io`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};