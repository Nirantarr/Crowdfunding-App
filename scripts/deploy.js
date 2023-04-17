const hre = require("hardhat");
//  0x5FbDB2315678afecb367f032d93F642f64180aa3
async function main() {
  const crowdfunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await crowdfunding.deploy();

  await crowdFunding.deployed();

  console.log("crowd funding contract deployed to :",crowdFunding.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
