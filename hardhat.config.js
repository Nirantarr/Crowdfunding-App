require("@nomicfoundation/hardhat-toolbox");
// const privateKeys='';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.18",
  // defaultNetwork: "polygon_mumbai",
  networks: {
  hardhat: {
  },
  polygon_mumbai: {
  url: 'https://polygon-mumbai.g.alchemy.com/v2/-5sFdqeTElQTspi2tpgGr6qdE3RIKIuK',
  accounts: [`0x${''}`]
  }
  },
  // etherscan: {
  // apiKey: process.env.POLYGONSCAN_API_KEY
  // },
  solidity: {
  version: "0.8.18",
  settings: {
  optimizer: {
  enabled: true,
  runs: 200
  }
  }
  },
};
