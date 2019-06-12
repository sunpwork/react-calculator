import React from 'react';
import CalculatorDisplay from '../components/CalculatorDisplay';
import {connect} from "react-redux";

const CalculatorDisplayContainer = () => {
    return (
        <CalculatorDisplay displayValue={this.props.displayValue}/>
    );
};

const mapStateToProps = (state) => {
    return {
        displayValue: state.displayValue
    }
};
export default connect(mapStateToProps)(CalculatorDisplayContainer);