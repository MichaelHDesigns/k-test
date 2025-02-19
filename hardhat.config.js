require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
//require('dotenv').config()
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "2JiDPAHVQOfT2Q6vywSZfLS0pU9"

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account  of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat:{
      chainId: 2330
    },
    mumbai: {
      url: `https://rpc0.altcoinchain.org/rpc`,
      accounts: []
    //  accounts: [process.env.PRIVATE_KEY.toString()]
    },
 //   mainnet: {
 //     url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
 //     accounts: [privateKey]
 //   },
  },
  solidity: "0.8.4",
};
