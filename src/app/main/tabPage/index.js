import React from 'react'
import {connect} from "react-redux";

const Index = (props) => {
    return (
        <h1>{props.displayValue}</h1>
    );
};

const mapStateToProps = (state) => {
    return {
        displayValue: state.displayValue
    }
};

export default connect(mapStateToProps)(Index);