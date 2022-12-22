const main = async () => {
  const Tickets = await hre.ethers.getContractFactory("Tickets");
  const tickets = await Tickets.deploy();
  await tickets.deployed();
  console.log("Tickets address: ", tickets.address);
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