import React , { useState } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import  NumberFormatCreditCard  from './NumberFormatCreditCard'

export const menssageValidation = (value, error) => {
  if (value === null || value === '') return
  
  return error ? "Number credit card invalid" : "Number credit card valid"
}

export const canHaveError = (currentValue, error ) => {
  if (currentValue === null || currentValue.length === 0 ) return false
  
  return error
}

function NumberCreditCard(props) {
  const { currentValue, error } = props
  const [value, setValue] = useState({ data: null })
  
  return (
    <TextField
      color="primary"
      variant="outlined"
      name="numberformat"
      id="number-credit-card"
      label="Number your credit card"
      value={value.Data}
      error={canHaveError(currentValue,error)}
      helperText={menssageValidation(currentValue, error)}
      InputProps={{
        inputComponent: NumberFormatCreditCard,
      }}
    />
  )
}

const mapStateToProps = state => ({
  currentValue: state.clickState.newValue,
  error: state.clickState.error
})

export default connect(mapStateToProps)(NumberCreditCard)