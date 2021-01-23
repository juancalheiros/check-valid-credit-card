function numberCreditCardIsValid(numberCreditCard) {
    
    if (numberCreditCard === null || numberCreditCard.length !== 16){
        return false
    }

    const arrayOfNumber = tratamentData(numberCreditCard)
    const reverseNumberCreditCard = arrayOfNumber.reverse() 
    const doubleValueInIndexOdd = doubleOddIndexes(reverseNumberCreditCard)
    const adjustValues = adjustValuesWithTwoDigit(doubleValueInIndexOdd)
    const numberIsValid = sumArrayIsMod10(adjustValues)

    return numberIsValid
}
 
function tratamentData(numberCreditCard){
    const sliptString = numberCreditCard.split("")
    return sliptString.map(currentValue => { return Number(currentValue) })
}

function numberIsOdd(value){
    return value%2 !== 0
}

function doubleOddIndexes(arrayOfValues) {
    
    return  arrayOfValues.map((currentValue, index, array) => {
        
        if (numberIsOdd(index)) {
            return array[index] = currentValue*2
        }
        return array[index]
    })
}

function adjustValuesWithTwoDigit(arrayOfValues) {

    return arrayOfValues.map((currValue, index, array) => {
        const convertValueToString = (currValue).toString()
      
        if (convertValueToString.length > 1) {
            
            const arrayString = convertValueToString.split("") 
            const result = arrayString.reduce((acc,currentValue) => {
                return (Number(acc) + Number(currentValue))
            })
            
            return array[index] = result
        }
        else {
            return array[index] = Number(currValue)
        }
    })
}

function sumArrayIsMod10(array) {
    
    const result = array.reduce((acc, currentValue) => {
        return acc + currentValue
    })

    return result%10 === 0
}

module.exports = {
    numberIsOdd,
    numberCreditCardIsValid,
    tratamentData,
    doubleOddIndexes,
    adjustValuesWithTwoDigit,
    sumArrayIsMod10,
}