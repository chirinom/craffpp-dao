require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TZEC-h__Mpd3AYMkAsR4I-3Fec6OhnsC',
      accounts: ['5e8706dbaff3fc39d93ecaf91df7e2dafc42aee893014ebec582084fc95d0d38'],
    }
  }
};
