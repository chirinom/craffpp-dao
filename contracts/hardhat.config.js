require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    mainnet: {
      // Https KEY in alchemy
      // TODO: NEEDS TO COME FROM ENV
      url: 'https://eth-mainnet.g.alchemy.com/v2/Jk7_5pUCZ5aXR766DWoq2IXXYTwQ2GJl',
      // TODO: NEEDS TO COME FROM ENV
      // Account (private key) used to fund this contract
      // Account Production: Craffpp
      accounts: ['4907adfcbff9d3aec02388f07697e2c7bb4c5057179a029fc0f6726b2551c916'],
    }
  }
};
