require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      // Https KEY in alchemy
      url: 'https://eth-goerli.g.alchemy.com/v2/TkikmSFs4EoVYMqsL8yVBXK8hBF4NBKa',
      // Account (private key) used to fund this contract
      // Account 4 test
      accounts: ['8e6adcdb58db4245d0c02a8b03b254f624b1d302cc4c48560dc3acc2bb70ffb1'],
    }
  }
};
