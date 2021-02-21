import React  from 'react'
import TextField from '@material-ui/core/TextField'
import ExpirationDateFormat from './ExpirationDateFormat'


export default function ExpirationDate() {
  
  return (
    <TextField
      color="primary"
      variant="outlined"
      name="expirationDate"
      id="expiration-date"
      label="Expiration date"
      InputProps={{
        inputComponent: ExpirationDateFormat,
      }}
    />
  )
}