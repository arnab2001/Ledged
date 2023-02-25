const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const Organization = await hre.ethers.getContractFactory("OrgContract");
  const Org_contract = await Organization.deploy();

  await Org_contract.deployed();

  console.log("OrgContract is deployed to:", Org_contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
