import React , { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import  CreditCardNumberFormat  from './CreditCardNumberFormat'
import { numberCreditCardIsValid } from './ValidateCreditCardNumber'

export default function CreditCardNumber(props) {

  const [value, setValue] = useState(null)
  const [isValidNumber,setIsValidNumber] = useState(true)
  const [menssage, setMenssage] = useState(undefined)

  const handleChange = event => {
    const { value } = event.target
    
    if(isInitialState(value)){
      clearValues()
    }
    else {
      const valueIsValid = numberCreditCardIsValid(value)
      const respMenssage = valueIsValid ? "" : "Number credit card invalid"
  
      setUpdates(value,valueIsValid,respMenssage)
    }
    
  }  

  const setUpdates = (value,isValidNumber,menssage) =>{
    setValue(value)
    setMenssage(menssage)
    setIsValidNumber(isValidNumber)

    props.handleNumberCreditCard(value)
    props.handleCanHaveErrorCreditCard(isValidNumber)
  }

  const clearValues = () =>{
    setValue(null)
    setIsValidNumber(true)
    setMenssage(undefined)
  }

  const isInitialState = value => {
    return value === null || value === ''
  }

  
  return (
    <TextField
      color="primary"
      variant="outlined"
      name="numberformat"
      id="number-credit-card"
      label="Number your credit card"
      onChange={handleChange}
      value={value}
      error={!isValidNumber}
      helperText={menssage}
      InputProps={{
        inputComponent: CreditCardNumberFormat,
      }}
    />
  )
}