import React from 'react'
import CalculatorButton from './CalculatorButton';

class CalculatorApp extends React.Component {

    render() {
        return (
            <div>
                <CalculatorButton btnValue="2"/>
            </div>
        )
    }
}

export default CalculatorApp;