import React, {useState}  from 'react'
import TextField from '@material-ui/core/TextField'
import ExpirationDateFormat from './ExpirationDateFormat'


export default function ExpirationDate(props) {
  const { handleExpirateDate, handleCanHaveErrorExpirateDate } = props
  
  const [value, setValue] = useState(null)
  const [isValidData,setIsValiData] = useState(true)
  const [menssage, setMenssage] = useState(undefined)

  const handleChange = event => {
    const { value } = event.target
    const {mounth, year} = extractData(value)
    
    if(isInitialState(value)){
      clearValues()
    }
    else {
      const now  = new Date()
      const dateActual = now.getFullYear()
      const menssageMounth = mounth > 12 || mounth <= 0 ? "Mounth invalid":"" 
      const  menssageYear =  yearIsValid(year,dateActual) ? "Year invalid":""
      

      const respMenssage = menssageMounth + " " + menssageYear
      const isValidDate = (menssageYear === "" && menssageMounth === "") 
      
      setUpdates(value,respMenssage,isValidDate)
    }
    
  } 

  const yearIsValid = (year,dateActual) => {
    return (year !== null && ((year < dateActual) || (year > dateActual+10)))
  }
  const setUpdates = (value,menssage,isValidDate) => {
    setValue(value)
    setMenssage(menssage)
    setIsValiData(isValidDate)

    handleExpirateDate(value)
    handleCanHaveErrorExpirateDate(isValidDate)
  }

  const clearValues = () => {
    setValue(null)
    setMenssage(undefined)
    setIsValiData(true)
  }

  const isInitialState = value => {
    return value === null || value === ''
  }

  const extractData = data => {

    const  mounth = data.slice(0,2)
    const  year = data.slice(2)

   return {mounth, year}
  }


  return (
    <TextField
      color="primary"
      variant="outlined"
      name="expirationDate"
      id="expiration-date"
      label="Expiration date"
      onChange={handleChange}
      value={value}
      error={!isValidData}
      helperText={menssage}
      InputProps={{
        inputComponent: ExpirationDateFormat,
      }}
    />
  )
}