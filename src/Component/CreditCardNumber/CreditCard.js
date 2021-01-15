import React , { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { NumberFormatCreditCard } from './NumberFormatCreditCard'
import { numberCreditCardIsValid } from './ValidateNumberCreditCard'

function validError(){
  numberCreditCardIsValid("123")
  return false
}

function menssageValidation() {
  return validError() ? "Number credit card invalid" : "Number credit card valid"
}
export function NumberCreditCard() {
  const [value, setValue] = useState({ data: null })
  
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.name,
    })
  }

  return (
    <TextField
      label="Number your credit card"
      value={value.Data}
      color="primary"
      error={validError()}
      helperText={menssageValidation()}
      onChange={handleChange}
      name="numberformat"
      id="number-credit-card"
      variant="outlined"
      InputProps={{
        inputComponent: NumberFormatCreditCard,
      }}
    />
  );
}