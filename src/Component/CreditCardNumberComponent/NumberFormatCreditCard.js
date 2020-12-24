import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export function NumberFormatCreditCard(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            mask="_"
            isNumericString
            getInputRef={inputRef}
            format = "#### #### #### ####"
            placeholder="1234 1234 1234 1234"
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
        />
    );
}
  
  
NumberFormatCreditCard.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};