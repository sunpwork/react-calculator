import React from 'react'
import CalculatorButton from './CalculatorButton';

class CalculatorKeyboard extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <CalculatorButton btnValue="7"/>
                    <CalculatorButton btnValue="8"/>
                    <CalculatorButton btnValue="9"/>
                    <CalculatorButton btnValue="+"/>
                </div>
                <div>
                    <CalculatorButton btnValue="4"/>
                    <CalculatorButton btnValue="5"/>
                    <CalculatorButton btnValue="6"/>
                    <CalculatorButton btnValue="-"/>
                </div>
                <div>
                    <CalculatorButton btnValue="1"/>
                    <CalculatorButton btnValue="2"/>
                    <CalculatorButton btnValue="3"/>
                    <CalculatorButton btnValue="*"/>
                </div>
                <div>
                    <CalculatorButton btnValue="0"/>
                    <CalculatorButton btnValue="."/>
                    <CalculatorButton btnValue="="/>
                    <CalculatorButton btnValue="/"/>
                </div>
                <div>
                    <CalculatorButton btnValue="AC"/>
                </div>
            </div>
        );
    }
}

export default CalculatorKeyboard;