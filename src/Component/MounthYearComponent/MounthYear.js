import React , { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { FormatValidityData } from './FormatValidityData'


export function MounthYear() {
  const [value, setValue] = useState({ data: null })
  
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <TextField
      label="Mounth/Year"
      value={value.Data}
      onChange={handleChange}
      name="mounthyear"
      id="mounth-year"
      variant="outlined"
      InputProps={{
        inputComponent: FormatValidityData,
      }}
    />
  );
}