require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      // Https KEY in alchemy
      url: 'https://eth-goerli.g.alchemy.com/v2/TkikmSFs4EoVYMqsL8yVBXK8hBF4NBKa',
      // Account (private key) used to fund this contract
      accounts: ['b9c10a8084d7967d6dd9687d216bf2d8f0d8775d72bb936839115f38da23ee7d'],
    }
  }
};
