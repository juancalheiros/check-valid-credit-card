import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import { connect } from 'react-redux'
import { typingField } from "../actions"

function NumberFormatCreditCard(props) {
    const { inputRef, onChange, dispatch, name,...other } = props
    
    const handleChange = ({value}) => {
        onChange({
            target: {
                name,
                value,
            },
        })

        setTimeout(() => {
            dispatch(typingField(value)) 
        },1500)
    }

    return (
        <NumberFormat
            {...other}
            mask="_"
            isNumericString
            getInputRef={inputRef}
            format = "#### #### #### ####"
            placeholder="1234 1234 1234 1234"
            onValueChange={handleChange}
        />
    )
}

const mapStateToProps = state => ({
    dispatch: state.clickState.dispatch,  
})

export default connect(mapStateToProps)(NumberFormatCreditCard)

NumberFormatCreditCard.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}