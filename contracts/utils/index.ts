import assert from './assert'
import constant from './constant'
import evm from './evm'
import timelock from './timelock'
import formatter from './formatter'

export const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default {
    ...evm, ...assert, ...constant, ...timelock, ...formatter
}
