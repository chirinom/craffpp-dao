const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  const Winners = await hre.ethers.getContractFactory("Winners");
  const winners = await Winners.deploy();

  await transactions.deployed();
  await winners.deployed();

  console.log("Transactions address: ", transactions.address);
  console.log("Winners address: ", winners.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();

// To peploy. From /contract
// npx hardhat run --network goerli scripts/deploy.js