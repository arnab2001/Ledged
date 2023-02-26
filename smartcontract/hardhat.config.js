require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    fire: {
      url: "https://rpc-testnet.5ire.network",
      accounts: [
        "f210395e46f6eac1e0df285a2c7a5242db3ff39d384c170f297a379b4a3bbb3b",
      ],
    },
    polygon: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/z7jHfZKxHgoTPxQNXadlqR9HGy6aBezK",
      accounts: [
        "f210395e46f6eac1e0df285a2c7a5242db3ff39d384c170f297a379b4a3bbb3b",
      ],
    },
  },
};
