import { ethers } from 'hardhat';

async function main() {
  const kitn = await ethers.deployContract('CleanAppKITN');
  await kitn.waitForDeployment();
  console.log("CleanAppKITN contract deployed to address:", kitn.target);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });