import { ethers } from 'hardhat';

async function main() {
  const kitn = await ethers.deployContract('KitnDisbursement');
  await kitn.waitForDeployment();
  console.log("KitnDisbursement contract deployed to address:", kitn.target);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });