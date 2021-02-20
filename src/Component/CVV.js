import React  from 'react'
import TextField from '@material-ui/core/TextField'
import CVVFormat from './CVVFormat'


export default function CVV() {
  
  return (
    <TextField
      color="primary"
      variant="outlined"
      name="cvv"
      id="cvv-number-credit-card"
      label="CVV your credit card"
      InputProps={{
        inputComponent: CVVFormat,
      }}
    />
  )
}