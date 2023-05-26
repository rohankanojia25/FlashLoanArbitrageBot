require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    sepolia: {
    url: "https://sepolia.infura.io/v3/834c1205f1844ead8a64b30f393b4cde",
    accounts: ['8391ba134ab2248ab330024294313b1323cc5ed660994e3c7692ec61f57bcec6'],
    },
  },
};
 