import React from 'react'
import CalculatorKeyBoard from './keyboard/CalculatorKeyboard';
import CalculatorDisplay from "./display/CalculatorDisplay";

export const Calculator = () => {
    return (
        <div>
            <CalculatorDisplay/>
            <CalculatorKeyBoard/>
        </div>
    )
};