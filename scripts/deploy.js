async function main() {
  const KitnDisbursement = await ethers.getContractFactory("KitnDisbursement");

  // Start deployment, returning a promise that resolves to a contract object
  const kitn_disbursement = await KitnDisbursement.deploy("KitnDisbursement");
  console.log("Contract deployed to address:", kitn_disbursement.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });