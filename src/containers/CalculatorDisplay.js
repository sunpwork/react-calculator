import React from 'react';
import CalculatorDisplay from '../component/CalculatorDisplay';
import {connect} from "react-redux";

class CalculatorDisplayContainer extends React.Component {
    render() {
        return (
            <CalculatorDisplay displayValue={this.props.displayValue}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        displayValue: state.displayValue
    }
};
export default connect(mapStateToProps)(CalculatorDisplayContainer);