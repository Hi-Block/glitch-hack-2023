import { BigNumber, ethers } from 'ethers'
import { BigNumberish } from '@ethersproject/bignumber'


const fromUnit = (amount: any, unit: string | BigNumberish = 'ether') => ethers.utils.formatUnits(amount.toString(), unit)
const toUnit = (amount: any, unit = 'ether') => ethers.utils.parseUnits(amount.toString(), unit)
const toComma = (amount: any) => ethers.utils.commify(amount.toString())

const estimateGasMargin = async (execution: Promise<BigNumber>): Promise<string> => {
    try {
        const estimatedGas = await execution
        return estimatedGas.mul(130).div(100).toString()
    } catch {
        return '10000000'
    }
}

export default {
    fromUnit, toUnit, toComma, estimateGasMargin
}