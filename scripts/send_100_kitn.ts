import ethers from 'hardhat';

require('dotenv').config();

async function main() {
  // Get the ContractFactory of the KITN disbursement contract
  const KitnDisbursement = await ethers.ethers.getContractFactory("KitnDisbursement");

  // Connect to the contract
  const contractAddress = process.env.KITN_DISBURSEMENT_ADDRESS as string;
  const contract = KitnDisbursement.attach(contractAddress);

  // Set allowance
  await contract.renewAllowance(100, 60);
  // Transfer funds
  await contract.spendCoins("0xB8634c20a484DE2C4d60Bf913b1F2422e16d9D6d", 100)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
