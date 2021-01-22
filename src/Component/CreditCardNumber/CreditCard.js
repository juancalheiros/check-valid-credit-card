import React , { useState } from 'react'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField'
import  NumberFormatCreditCard  from './NumberFormatCreditCard'
import { numberCreditCardIsValid } from './ValidateNumberCreditCard'


function NumberCreditCard(props) {
  const [value, setValue] = useState({ data: null })
  
  const handleChange = event => { 
    setValue({
      ...value,
      [event.target.name]: event.target.name,
    })
  } 

  const menssageValidation = value => {
    if (value === null){
      return
    }
    return numberCreditCardIsValid(value) ? "Number credit card invalid" : "Number credit card valid"
  }

  const { newValue } = props
 
  return (
    <TextField
      label="Number your credit card"
      value={value.Data}
      color="primary"
      error={numberCreditCardIsValid(newValue)}
      helperText={menssageValidation(newValue)}
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

const mapStateToProps = store => {
  return {
    newValue: store.clickState.newValue
  }
}

export default connect(mapStateToProps)(NumberCreditCard)