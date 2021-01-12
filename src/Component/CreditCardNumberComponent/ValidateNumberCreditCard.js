function numberCreditCardIsValid(numberCreditCard) {
    
    const arrayOfNumber = tratamentData(numberCreditCard)
    const reverseNumberCreditCard = reverseArray(arrayOfNumber) 
    const doubleValueInIndexOdd = doubleOddIndexes(reverseNumberCreditCard)
    const adjustValues = adjustValuesWithTwoDigit(doubleValueInIndexOdd)
    const numberIsValid = sumArrayIsMod10(adjustValues)

    return numberIsValid
}
  
function tratamentData(numberCreditCard){
    const convertToString = convertNumberToString(numberCreditCard)
    const sliptString = convertToString.split("")
    const arrayOfNumber = sliptString.map(value => { return Number(value) })

    return arrayOfNumber
}

function reverseArray(array) {
    return array.reverse()
}

function doubleOddIndexes(array) {
    let resp = []

     array.map((currentValue,index) => {
        
        index%2 !== 0 ? 
            (resp.push(currentValue*2))
            :(resp.push(currentValue))
        
    })
    return resp
}

function convertNumberToString(value) {
    return (value).toString()
}

function adjustValuesWithTwoDigit(array) {
    let resp = []

    array.map((currValue) => {
        const convertValueToString = convertNumberToString(currValue)
      
        if (convertValueToString.length > 1) {
            const arrayString = convertValueToString.split("") 
            
            const result = arrayString.reduce((acc,currentValue) => {
                return (Number(acc) + Number(currentValue))
            })
    
            resp.push(result)
        }
        else{
            resp.push(Number(currValue))
        }
    })

    return resp
}

function sumArrayIsMod10(array) {
    
    const result = array.reduce((acc, currentValue) => {
        return acc + currentValue
    })

    return result%10 === 0
}

module.exports = {
    numberCreditCardIsValid,
    tratamentData,
    reverseArray,
    doubleOddIndexes,
    adjustValuesWithTwoDigit,
    sumArrayIsMod10,
}