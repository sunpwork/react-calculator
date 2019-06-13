import React from 'react'
import CalculatorButton from './button';
import PropTypes from 'prop-types';

/**
 * @author sunpwork
 * 计算器键盘
 */
const CalculatorKeyboard = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="7"/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="8"/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="9"/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="+"/>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="4"/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="5"/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="6"/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="-"/>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="1"/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="2"/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="3"/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="*"/>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="0"/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="."/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="AC"/>
                </div>
                <div className="col-3">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="/"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <CalculatorButton handButtonClick={props.handleButtonClick} btnValue="="/>
                </div>
            </div>
        </div>
    )
};

CalculatorKeyboard.propTypes = {
    handButtonClick: PropTypes.func
};

export default CalculatorKeyboard;