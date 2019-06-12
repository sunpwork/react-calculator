import React from 'react'
import CalculatorKeyBoard from './keyboard';
import CalculatorDisplay from "./display";

const CalculatorApp = () => {
    return (
        <div>
            <CalculatorDisplay/>
            <CalculatorKeyBoard/>
        </div>
    )
};

export default CalculatorApp;