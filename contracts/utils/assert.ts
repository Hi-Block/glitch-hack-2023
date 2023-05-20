import '@nomiclabs/hardhat-ethers'
import { BigNumber } from 'ethers'
import { assert } from 'chai'
// import { fromUnit } from './evm'
import { ethers } from 'hardhat'


const fromUnit = (amount: any, unit = 'ether') => ethers.utils.formatUnits(amount.toString(), unit)
// const fromUnit = evm.fromUnit

/**
 *  Convenience method to assert that two objects or arrays which contain nested BigNumber instances are equal.
 *  @param actual What you received
 *  @param expected The shape you expected
 *  @param context The description to log if we fail the assertion
 */
const deepEqual = (actual: any, expected: any, context?: string) => {
    // Check if it's a value type we can assert on straight away.
    if (BigNumber.isBigNumber(actual) || BigNumber.isBigNumber(expected)) {
        bnEqual(actual, expected, context)
    } else if (typeof expected === 'string' || typeof actual === 'string' || typeof expected === 'number' || typeof actual === 'number' || typeof expected === 'boolean' || typeof actual === 'boolean') {
        assert.strictEqual(actual, expected, context)
    }
    
    // Otherwise dig through the deeper object and recurse
    else if (Array.isArray(expected)) {
        for (let i = 0 ; i < expected.length ; i++) {
            deepEqual(actual[i], expected[i], `(array index: ${i}) `)
        }
    } else {
        for (const key of Object.keys(expected)) {
            deepEqual(actual[key], expected[key], `(key: ${key}) `)
        }
    }
}

/**
 *  Convenience method to assert that two BigNumber instances are equal.
 *  @param actual The BigNumber instance you received
 *  @param expected The BigNumber amount you expected to receive
 *  @param context The description to log if we fail the assertion
 */
const bnEqual = (actual: BigNumber, expected: BigNumber, context?: string) => {
    assert.strictEqual(actual.toString(), expected.toString(), context)
}

/**
 *  Convenience method to assert that two BigNumber instances are NOT equal.
 *  @param actual The BigNumber instance you received
 *  @param expected The BigNumber amount you expected NOT to receive
 *  @param context The description to log if we fail the assertion
 */
const bnNotEqual = (actual: BigNumber, expected: BigNumber, context?: string) => {
    assert.notStrictEqual(actual.toString(), expected.toString(), context)
}

/**
 *  Convenience method to assert that two BigNumber instances are within 100 units of each other.
 *  @param actual The BigNumber instance you received
 *  @param expected The BigNumber amount you expected to receive, allowing a varience of +/- 100 units
 *  @param varianceParam The maximum variance between actual and expected allowed
 */
const bnClose = (actual: BigNumber, expected: BigNumber, varianceParam = '100000') => {
    actual = BigNumber.isBigNumber(actual) ? actual : BigNumber.from(actual)
    expected = BigNumber.isBigNumber(expected) ? expected : BigNumber.from(expected)
    const variance = BigNumber.isBigNumber(varianceParam) ? varianceParam : BigNumber.from(varianceParam)
    const actualDelta = expected.sub(actual).abs()
    
    assert.ok(actual.gte(expected.sub(variance)), `Number is too small to be close (Delta between actual and expected is ${fromUnit(actualDelta)}, but variance was only ${fromUnit(variance)}`)
    assert.ok(actual.lte(expected.add(variance)), `Number is too large to be close (Delta between actual and expected is ${fromUnit(actualDelta)}, but variance was only ${fromUnit(variance)})`)
}

/**
 *  Convenience method to assert that the value of left operand is greater than then value of the right operand
 *  @param aBN The left operand BigNumber instance
 *  @param bBN The right operand BigNumber instance
 */
const bnGreaterThan = (aBN: BigNumber, bBN: BigNumber) => {
    assert.ok(aBN.gt(bBN), `${aBN.toString()} is not greater than ${bBN.toString()}`)
}

/**
 *  Convenience method to assert that the value of left operand is greater than or equal then value of the right operand
 *  @param aBN The left operand BigNumber instance
 *  @param bBN The right operand BigNumber instance
 */
const bnGreaterEqualThan = (aBN: BigNumber, bBN: BigNumber) => {
    assert.ok(aBN.gte(bBN), `${aBN.toString()} is not greater than or equal to ${bBN.toString()}`)
}

/**
 *  Convenience method to assert that the value of left operand is less than then value of the right operand
 *  @param aBN The left operand BigNumber instance
 *  @param bBN The right operand BigNumber instance
 */
const bnLessThan = (aBN: BigNumber, bBN: BigNumber) => {
    assert.ok(aBN.lt(bBN), `${aBN.toString()} is not less than ${bBN.toString()}`)
}

/**
 *  Convenience method to assert that the value of left operand is less than then value of the right operand
 *  @param aBN The left operand BigNumber instance
 *  @param bBN The right operand BigNumber instance
 */
const bnLessEqualThan = (aBN: BigNumber, bBN: BigNumber) => {
    assert.ok(aBN.lte(bBN), `${aBN.toString()} is not less than or equal to ${bBN.toString()}`)
}

/**
 * Convenience method to assert that the return of the given block when invoked or promise causes a
 * revert to occur, with an optional revert message.
 * @param blockOrPromise The JS block (i.e. function that when invoked returns a promise) or a promise itself
 * @param reason Optional reason string to search for in revert message
 */
const revert = async (blockOrPromise: Promise<any> | Function, reason: string) => {
    let errorCaught = false
    try {
        const result = typeof blockOrPromise === 'function' ? blockOrPromise() : blockOrPromise
        await result
    } catch (error: any) {
        assert.include(error.message, 'revert')
        if (reason) {
            assert.include(error.message, reason)
        }
        errorCaught = true
    }
    assert.strictEqual(errorCaught, true, 'Operation did not revert as expected')
}

/**
 *  Convenience method to assert that an event matches a shape
 *  @param txReceiptOrEvent The transaction receipt, or event as returned in the event logs from web3
 *  @param expectedEvent The event name you expect
 *  @param expectedArgs The args you expect in object notation, e.g. { newOracle: '0x...', updatedAt: '...' }
 */
const eventEqual = (txReceiptOrEvent: any, expectedEvent: string, expectedArgs: Record<string, any>) => {
    const event = Array.isArray(txReceiptOrEvent.events) ? txReceiptOrEvent.events[0] : txReceiptOrEvent
    if (!event) {
        assert.fail('No event was generated from this transaction')
    }
    
    assert.strictEqual(event.event, expectedEvent)
    deepEqual(event.args, expectedArgs)
}

/**
 * export utils
 * */
export default {
    ...assert,
    bnEqual, bnNotEqual, bnClose,
    bnGreaterThan, bnGreaterEqualThan, bnLessThan, bnLessEqualThan,
    revert, eventEqual
}
