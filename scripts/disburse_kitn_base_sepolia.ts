import { ethers } from 'hardhat';

async function main() {
  const kitn = await ethers.deployContract(
    'KitnDisbursement',
    ['0xE5a0F6BCCBF606718D3E7844E64Bf9c34727EA33']
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