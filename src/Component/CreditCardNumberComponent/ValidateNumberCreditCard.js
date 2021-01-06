export function numberCreditCardIsValid(numberCreditCard) {
    
    const arrayOfNumber = tratamentData(numberCreditCard)
    const reverseNumberCreditCard = reverseArray(arrayOfNumber) 
    const doubleValueInIndexOdd = doubleOddIndexes(reverseNumberCreditCard)
    const adjustValues = adjustValuesWithTwoDigit(doubleValueInIndexOdd)
    const numberIsValid = sumArrayIsMod10(adjustValues)

    return numberIsValid
}
  
export function tratamentData(numberCreditCard){
    const convertToString = (numberCreditCard).toString()
    const sliptString = convertToString.split("")
    const arrayOfNumber = sliptString.map(value => { return Number(value) })

    return arrayOfNumber
}

export function reverseArray(array) {
    return array.reverse()
}

export function doubleOddIndexes(array) {
    let resp = []

    for (let index in array) {
        let currentValue = array[index] 

        index%2 !== 0 ? 
            (resp.push(currentValue*2))
            :(resp.push(currentValue))
        
    }
    return resp
}

export function adjustValuesWithTwoDigit(array) {
    let resp = []

    array.map((currValue) => {
        const convertValueToString = (currValue).toString()
      
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

export function sumArrayIsMod10(array) {
    
    const result = array.reduce((acc, currentValue) => {
        return acc + currentValue
    })

    return result%10 === 0
}

