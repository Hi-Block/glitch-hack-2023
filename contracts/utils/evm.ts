import '@nomiclabs/hardhat-ethers'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { ethers } from 'hardhat'
import { BigNumber } from 'ethers'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address'
import { BigNumberish } from '@ethersproject/bignumber'
import { numberToHex } from 'web3-utils'


const hre: HardhatRuntimeEnvironment = require('hardhat')

/**
 * Block Manipulations
 * */
const currentTime = async () => {
    const { timestamp } = await ethers.provider.getBlock('latest')
    return timestamp
}

const currentBlock = async () => {
    return await ethers.provider.getBlockNumber()
}

const mineBlock = async () => {
    await hre.network.provider.request({ method: 'evm_mine' })
    return await currentBlock()
}

const mineBlockBulk = async (count: number, sync: boolean = true) => {
    const requests = []
    while (count--) {
        if (sync) {
            requests.push(hre.network.provider.request({ method: 'evm_mine' }))
        } else {
            hre.network.provider.request({ method: 'evm_mine' })
        }
    }
    
    if (sync && requests.length > 0) {
        await Promise.all(requests)
    }
    return await currentBlock()
}

const mine2Hours = async (sync: boolean = true) => {
    const BlockPerHour = 1200
    await mineBlockBulk(BlockPerHour * 2, sync)
}

const mine24Hours = async (sync: boolean = true) => {
    const BlockPerHour = 1200
    await mineBlockBulk(BlockPerHour * 24, sync)
}

const mineTo = async (blockNumber: number, sync: boolean = true) => {
    let block = await currentBlock()
    if (block >= blockNumber) return
    let diff = blockNumber - block
    // console.log(`block diff: ${diff}, to: ${blockNumber}`)
    await mineBlockBulk(diff, sync)
}

/**
 *  Increases the time in the EVM.
 *  @param seconds Number of seconds to increase the time by
 */
const fastForward = async (seconds: any) => {
    if (BigNumber.isBigNumber(seconds)) {
        seconds = seconds.toNumber()
    }
    
    if (typeof seconds === 'string') {
        seconds = parseInt(seconds)
    }
    
    await hre.network.provider.request({ method: 'evm_increaseTime', params: [seconds] })
    return await mineBlock()
}

const fastForwardTo = async (unixTimestamp: any) => {
    if (BigNumber.isBigNumber(unixTimestamp)) {
        unixTimestamp = unixTimestamp.toNumber()
    }
    
    if (typeof unixTimestamp === 'string') {
        unixTimestamp = parseInt(unixTimestamp)
    }
    
    if (unixTimestamp instanceof Date) {
        unixTimestamp = Math.floor(unixTimestamp.getTime() / 1000)
    }
    
    const to = new Date(unixTimestamp * 1000)
    const now = new Date(await currentTime() * 1000)
    if (to < now) throw new Error(`Time parameter (${to}) is less than now ${now}.`)
    
    const secondsBetween = Math.floor((to.getTime() - now.getTime()) / 1000)
    return await fastForward(secondsBetween)
}

const fastForwardMultiChain = async (seconds: any, providerETH: any, providerBSC: any) => {
    if (BigNumber.isBigNumber(seconds)) {
        seconds = seconds.toNumber()
    }
    
    if (typeof seconds === 'string') {
        seconds = parseInt(seconds)
    }
    
    await providerETH.send('evm_increaseTime', [seconds])
    await providerETH.send('evm_mine')
    
    await providerBSC.send('evm_increaseTime', [seconds])
    await providerBSC.send('evm_mine')
}

/**
 *  Takes a snapshot and returns the ID of the snapshot for restoring later.
 */
const takeSnapshot = async () => {
    const result = await hre.network.provider.request({ method: 'evm_snapshot' })
    await mineBlock()
    return result
}

const takeSnapshotMultiChain = async (providerETH: any, providerBSC: any) => {
    const resultETH = await providerETH.send('evm_snapshot')
    await providerETH.send('evm_mine')
    
    const resultBSC = await providerBSC.send('evm_snapshot')
    await providerBSC.send('evm_mine')
    
    return { idETH: resultETH, idBSC: resultBSC }
}

/**
 *  Restores a snapshot that was previously taken with takeSnapshot
 *  @param id The ID that was returned when takeSnapshot was called.
 */
const revertSnapshot = async (id: any) => {
    await hre.network.provider.request({ method: 'evm_revert', params: [id] })
    return await mineBlock()
}

const revertSnapshotMultiChain = async (providerETH: any, providerBSC: any, snapshotIds: { idETH: string, idBSC: string }) => {
    await providerETH.send('evm_revert', [snapshotIds.idETH])
    await providerETH.send('evm_mine')
    const blockNumberETH = await providerETH.getBlockNumber()
    
    await providerBSC.send('evm_revert', [snapshotIds.idBSC])
    await providerBSC.send('evm_mine')
    const blockNumberBSC = await providerBSC.getBlockNumber()
    
    return { blockNumberETH: blockNumberETH, blockNumberBSC: blockNumberBSC }
}

/**
 * Impersonate accounts
 * */
const impersonate = async (accounts: any) => {
    await hre.network.provider.request({ method: 'hardhat_impersonateAccount', params: accounts })
}

/*
 * Set StorageAt
 * */

const setOwner = async (address: any, owner: any) => {
    await hre.network.provider.send('hardhat_setStorageAt', [
        address,
        '0x0',
        `0x000000000000000000000000${owner.substring(2)}`
    ])
}

/**
 * Get ETH | BNB balance
 * */
const balance = async (account: string) => await ethers.provider.getBalance(account)

/**
 * Transfer ETH | BNB balance
 * */
const sendETH = async (signer: SignerWithAddress, to: string, value: any) => {
    await signer.sendTransaction({
        to: to,
        value: value
    })
}

/**
 * Gas Estimation
 * */
const estimateGasMargin = async (execution: Promise<BigNumber>): Promise<string> => {
    try {
        const estimatedGas = await execution
        return estimatedGas.mul(150).div(100).toString()
    } catch {
        return '5000000'
    }
}

/**
 *  Translates an amount to our canonical unit. We happen to use 10^18, which means we can
 *  use the built in web3 method for convenience, but if unit ever changes in our contracts
 *  we should be able to update the conversion factor here.
 */
const toUnit = (amount: any, unit = 'ether') => ethers.utils.parseUnits(amount.toString(), unit)
const fromUnit = (amount: any, unit = 'ether') => ethers.utils.formatUnits(amount.toString(), unit)
const toComma = (amount: any) => ethers.utils.commify(amount.toString())

/**
 * export utils
 * */
export default {
    currentTime, currentBlock,
    mineBlock, mineBlockBulk, mine2Hours, mine24Hours, mineTo,
    fastForward, fastForwardTo, fastForwardMultiChain,
    takeSnapshot, revertSnapshot,
    takeSnapshotMultiChain, revertSnapshotMultiChain,
    impersonate, setOwner, balance, sendETH,
    toUnit, fromUnit, toComma,
    estimateGasMargin
}
