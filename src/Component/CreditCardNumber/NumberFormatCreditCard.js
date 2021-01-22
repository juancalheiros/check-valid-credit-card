import React , { useState,useEffect }from 'react';
import PropTypes from 'prop-types';
import { debounce } from "lodash"
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { clickButton } from "../../actions"

function NumberFormatCreditCard(props) {
    const { inputRef, onChange,dispatch, ...other } = props;

    const [inputValue, setInputValue] = useState(null)
    
    useEffect(() => {
        dispatch(clickButton(inputValue))
    },[inputValue])

    return (
        <NumberFormat
            {...other}
            mask="_"
            isNumericString
            getInputRef={inputRef}
            format = "#### #### #### ####"
            placeholder="1234 1234 1234 1234"
            onValueChange={(values) => {
                setInputValue(values.value)
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
        />
    )
}

const mapStateToProps = (state) => ({
    state,
})

export default connect(mapStateToProps)(NumberFormatCreditCard)

NumberFormatCreditCard.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};