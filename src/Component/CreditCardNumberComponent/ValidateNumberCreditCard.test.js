import { 
    tratamentData,
    reverseArray ,
    doubleOddIndexes , 
    adjustValuesWithTwoDigit,
    sumArrayIsMod10,
    numberCreditCardIsValid,
} from "./ValidateNumberCreditCard"

describe("tratamentData", () => {
    it("Should return array of number", () => {
        const value = 1234
        const expected = [1,2,3,4]

        const resp = tratamentData(value)

        expect(resp).toStrictEqual(expected)
    })
})


describe("reverseArray", () => {
    it("Should return reverse in array", () => {
        const array = [1,2,3]
        const expected = [3,2,1]

        const resp = reverseArray(array)

        expect(resp).toStrictEqual(expected)
    })
})

describe("doubleOddIndexes",() => {
    it("Should return array in duble value in odd index",() => {
        const array = [1,2,3,4]
        const expected = [1,4,3,8]

        const resp = doubleOddIndexes(array)

        expect(resp).toStrictEqual(expected)
    })
})

describe("adjustValuesWithTwoDigit", () => {
    it("Should return adjust to values with two digits", () => {
        const array = [1,3,12,11]
        const expected = [1,3,3,2]

        const resp = adjustValuesWithTwoDigit(array)

        expect(resp).toStrictEqual(expected)
    })
})

describe("sumArrayIsMod10", () => {
    it("Should return true when sum array is mod 10", () => {
        const array = [6, 2, 7, 7, 9, 6, 7, 4, 9, 9, 4]

        const resp = sumArrayIsMod10(array)

        expect(resp).toBeTruthy()
    })
})

describe("numberCreditCardIsValid", () => {
    it("Should return true when the number of credit card is valid", () => {
        const array = 49927398716

        const resp = numberCreditCardIsValid(array)

        expect(resp).toBeTruthy()
    })

    it("Should return false when the number of credit card is invalid", () => {
        const array = 49927398726

        const resp = numberCreditCardIsValid(array)

        expect(resp).toBeFalsy()
    })
})