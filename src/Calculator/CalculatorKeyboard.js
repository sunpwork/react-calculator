import React from 'react'
import CalculatorButton from '../component/CalculatorButton';

class CalculatorKeyboard extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <CalculatorButton buttonValue="7" type="number" />
                    <CalculatorButton buttonValue="8" type="number" />
                    <CalculatorButton buttonValue="9" type="number" />
                    <CalculatorButton buttonValue="+" type="operator" />
                </div>
                <div>
                    <CalculatorButton buttonValue="4" type="number"/>
                    <CalculatorButton buttonValue="5" type="number"/>
                    <CalculatorButton buttonValue="6" type="number"/>
                    <CalculatorButton buttonValue="-" type="operator"/>
                </div>
                <div>
                    <CalculatorButton buttonValue="1" type="number"/>
                    <CalculatorButton buttonValue="2" type="number"/>
                    <CalculatorButton buttonValue="3" type="number"/>
                    <CalculatorButton buttonValue="*" type="operator"/>
                </div>
                <div>
                    <CalculatorButton buttonValue="=" type="operator"/>
                    <CalculatorButton buttonValue="AC" type="operator"/>
                    <CalculatorButton buttonValue="/" type="operator"/>

                </div>
            </div>
        );
    }
}
export default CalculatorKeyboard;