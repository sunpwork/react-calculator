import React from 'react'
import CalculatorButton from './button';

const CalculatorKeyboard = () => {

    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <CalculatorButton btnValue="7"/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="8"/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="9"/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="+"/>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <CalculatorButton btnValue="4"/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="5"/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="6"/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="-"/>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <CalculatorButton btnValue="1"/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="2"/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="3"/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="*"/>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <CalculatorButton btnValue="0"/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="."/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="AC"/>
                </div>
                <div className="col-3">
                    <CalculatorButton btnValue="/"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <CalculatorButton btnValue="="/>
                </div>
            </div>

        </div>
    );
};

export default CalculatorKeyboard;