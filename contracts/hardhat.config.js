require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/oI1fT722kiZZye_zb9fQfThr2eTaUmlU',
      accounts: ['b9c10a8084d7967d6dd9687d216bf2d8f0d8775d72bb936839115f38da23ee7d'],
    }
  }
};
