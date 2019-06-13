import React from 'react'
import PropTypes from "prop-types";

const CalculatorDisplay = (props) => {
    return (
        <div className="row">
            <input className="form-control" style={{textAlign: 'right'}} type="text" value={props.displayValue}
                   disabled/>
        </div>
    );
};

CalculatorDisplay.propTypes = {
    displayValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default CalculatorDisplay;