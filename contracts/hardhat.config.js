require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      // Https KEY in alchemy
      url: 'https://eth-goerli.g.alchemy.com/v2/TkikmSFs4EoVYMqsL8yVBXK8hBF4NBKa',
      // Account (private key) used to fund this contract
      accounts: ['5e8706dbaff3fc39d93ecaf91df7e2dafc42aee893014ebec582084fc95d0d38'],
    }
  }
};
