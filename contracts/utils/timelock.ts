import '@nomiclabs/hardhat-ethers'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { ethers } from 'hardhat'
import { Signer } from 'ethers'
import constant from './constant'
import utils from './index'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address'
import evm from './evm'


const hre: HardhatRuntimeEnvironment = require('hardhat')

const encodeParameters = (types:any, values:any) => {
    const abi = new ethers.utils.AbiCoder()
    return abi.encode(types, values)
}

const getDeployer = async (): Promise<SignerWithAddress> => {
    const hre: HardhatRuntimeEnvironment = require('hardhat')
    
    if (hre.network.name === 'hardhat' || hre.network.name.includes('test')) {
        await evm.impersonate(['deployer address'])
    }
    
    return await SignerWithAddress.create(await ethers.provider.getSigner('deployer address'))
}


export default {
     getDeployer, encodeParameters
}
