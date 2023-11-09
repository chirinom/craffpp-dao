const main = async () => {
  const Winners = await hre.ethers.getContractFactory("Winners");
  const winners = await Winners.deploy();
  await winners.deployed();
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
// npx hardhat run --network mainnet scripts/deploy_winners.js