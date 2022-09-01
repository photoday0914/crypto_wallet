// const ethers = require("hardhat");
const { verify } = require("../utils/verify");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const EtherWallet = await ethers.getContractFactory("EtherWallet");
    const etherWallet = await EtherWallet.deploy();
    // await etherWallet.deployed();
    await etherWallet.deployTransaction.wait(2);

    console.log("EtherWallet address:", etherWallet.address);

    console.log("Verifying...");
    await verify(etherWallet.address, []);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
