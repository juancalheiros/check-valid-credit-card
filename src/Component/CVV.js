import React,{useState}  from 'react'
import TextField from '@material-ui/core/TextField'
import CVVFormat from './CVVFormat'


export default function CVV(props) {
  const { handleCanHaveErrorCVV, handleCVV } = props
  
  const [value,setValue] = useState(null)
  const [isValidNumber,setIsValidNumber] =useState(true)
  const [menssage,setMenssage] = useState(undefined)

  const handleChange = event =>{
    const { value } = event.target
      
    if(isInitialState(value)){
      clearValues()
    }
    else {
      const RespMenssage = value.length === 3 ? '':'Quantity insufficient of number'
      const valueIsValid = RespMenssage === ''
      
      setUpdates(value,RespMenssage,valueIsValid)
    }

  }

  const isInitialState = value => {
    return value === null || value === ''
  }

  const clearValues = () =>{
    setValue(null)
    setMenssage(undefined)
    setIsValidNumber(true)
  }

  const setUpdates = (value,RespMenssage,isValidNumber) =>{
    setValue(value)
    setMenssage(RespMenssage)
    setIsValidNumber(isValidNumber)
    
    handleCVV(value)
    handleCanHaveErrorCVV(isValidNumber)
  }

  return (
    <TextField
      color="primary"
      variant="outlined"
      name="cvv"
      id="cvv-number-credit-card"
      label="CVV your credit card"
      onChange={handleChange}
      error = {!isValidNumber}
      value={value}
      helperText={menssage}
      InputProps={{
        inputComponent: CVVFormat,
      }}
    />
  )
}