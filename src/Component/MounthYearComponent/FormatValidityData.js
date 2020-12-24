import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';


export function FormatValidityData(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            format = "##/##"
            placeholder="mm/yy"
            getInputRef={inputRef}
            isNumericString={true}
            mask={['m', 'm', 'y', 'y']}
            onValueChange={(value) => {
                onChange({
                    target: {
                        name: props.name,
                        value: value.value,
                    },
                });
            }}
        />
    );
}
  

FormatValidityData.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
