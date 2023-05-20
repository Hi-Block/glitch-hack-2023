import '@nomiclabs/hardhat-ethers'
import {ethers} from 'hardhat'
import utils from '../utils'
import * as mlog from 'mocha-logger'

const toUnit = utils.toUnit
const fromUnit = utils.fromUnit

let rp

describe("Reward Test", async() => {
    let deployer, user1
    let rewardPool

    before(async() => {
        [deployer, user1] = await ethers.getSigners()
    })

    it("Q1. Deploy Contract", async() => {
        rewardPool = await ethers.getContractFactory("RewardPool");
        rp = await rewardPool.deploy();
        //
    })

    it("Q2. Add Deposit To Reward Pool", async() => {
        await rp.deposit(toUnit(50));

        console.log("   Check Deposit Function")
        mlog.log("Reward Pool Balance: ", fromUnit(await rp.getRewardPoolBalance()))
        utils.bnEqual(await rp.getRewardPoolBalance(), toUnit(50))

        await rp.deposit(toUnit(50));
        mlog.log("Reward Pool Balance: ", fromUnit(await rp.getRewardPoolBalance()))
        utils.bnEqual(await rp.getRewardPoolBalance(), toUnit(100))
    })

    it("Q3. Add Claim Function", async() => {
        await rp.connect(user1).claim(toUnit(5));
        mlog.log("   test 1 ")
        console.log("   Check Withdraw Function")
        utils.bnEqual(await rp.getRewardPoolBalance(), toUnit(95))
    })
})