import { ethers } from 'hardhat';

async function main() {
  const kitn = await ethers.deployContract(
    'KitnDisbursement',
    ['0x7ccD117FC62B90C14a60eD821f55470B76cf7fb7']
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