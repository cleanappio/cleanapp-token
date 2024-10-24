import { ethers } from 'hardhat';

async function main() {
  const kitn = await ethers.deployContract(
    'KitnDisbursement',
    ['0x2D29ee5D409e66482EB5C4FBCaF092CeC4e57A8c']
  );
  await kitn.waitForDeployment();
  console.log("KitnDisbursement contract deployed to address:", kitn.target);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });