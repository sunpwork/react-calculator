import React from 'react';

const CalculatorButton = (props) => {
    const handleClickButton = () => {
        if (props.onClickButton) {
            props.onClickButton(props.btnValue);
        }
    };

    return (
        <button className="btn btn-outline-primary btn-lg btn-block"
                onClick={handleClickButton}>
            {props.btnValue}
        </button>
    );
};

export default CalculatorButton;