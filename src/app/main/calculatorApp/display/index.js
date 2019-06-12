import React from 'react';
import CalculatorDisplay from '../component/CalculatorDisplay';
import {connect} from "react-redux";

const CalculatorDisplayContainer = (props) => {
    return (
        <CalculatorDisplay displayValue={props.displayValue}/>
    );
};

const mapStateToProps = (state) => {
    return {
        displayValue: state.displayValue
    }
};
export default connect(mapStateToProps)(CalculatorDisplayContainer);