import React from 'react'
import CalculatorKeyBoard from './CalculatorKeyboard';
import CalculatorDisplay from "./CalculatorDisplay";

class CalculatorApp extends React.Component {

    render() {
        return (
            <div>
                <CalculatorDisplay/>
                <CalculatorKeyBoard/>
            </div>
        )
    }
}

export default CalculatorApp;