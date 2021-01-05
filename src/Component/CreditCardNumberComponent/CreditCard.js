import React , { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { NumberFormatCreditCard } from './NumberFormatCreditCard'


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