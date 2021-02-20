import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

export default function CVVFormat(props) {
    const { inputRef, onChange, name,...other } = props
    
    const handleChange = ({value}) => {
        onChange({
            target: {
                name,
                value,
            },
        })
    }

    return (
        <NumberFormat
            {...other}
            mask="_"
            isNumericString
            getInputRef={inputRef}
            format = "###"
            placeholder="123"
            onValueChange={handleChange}
        />
    )
}

CVVFormat.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}