import React , { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import  CreditCardNumberFormat  from './CreditCardNumberFormat'
import { numberCreditCardIsValid } from './ValidateCreditCardNumber'

export default function CreditCardNumber() {

  const [value, setValue] = useState(null)
  const [isValidNumber,setIsValidNumber] = useState(true)
  const [menssage, setMenssage] = useState(undefined)

  const handleChange = event => {
    const { value } = event.target
    
    if(isInitialState(value)){
      clearValues()
    }
    else{
      const resp = numberCreditCardIsValid(value)
      const RespMenssage =  resp ? "Number credit card valid" : "Number credit card invalid" 
  
      setUpdates(value,resp,RespMenssage)
    }
    
  }  

  const setUpdates = (value,isValidNumber,menssage) =>{
    setValue(value)
    setMenssage(menssage)
    setIsValidNumber(isValidNumber)
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