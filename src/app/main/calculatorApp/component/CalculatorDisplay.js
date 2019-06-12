import React from 'react'

const CalculatorDisplay = (props) => {
    return (
        <div className="row">
            <input className="form-control" style={{textAlign: 'right'}} type="text" value={props.displayValue}
                   disabled/>
        </div>
    );
};

export default CalculatorDisplay;