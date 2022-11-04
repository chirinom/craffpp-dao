const main = async () => {
  const Tickets = await hre.ethers.getContractFactory("Tickets");
  const tickets = await Tickets.deploy();

  const Winners = await hre.ethers.getContractFactory("Winners");
  const winners = await Winners.deploy();

  await tickets.deployed();
  await winners.deployed();

  console.log("Tickets address: ", tickets.address);
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