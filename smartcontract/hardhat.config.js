require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    polygon: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/omc8gYmqslQ3p2GJF_mU_NdjRh0QAA4c",
      accounts: [
        "586ae6175e09d898d8e7a267d5178cc4f5f9d245e2593127418516cfaa4bd5c5",
      ],
    },
  },
};
