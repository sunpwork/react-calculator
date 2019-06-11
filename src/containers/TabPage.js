import React from 'react'
import {connect} from "react-redux";

class TabPage extends React.Component {
    render() {
        return (
            <h1>{this.props.displayValue}</h1>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        displayValue: state.displayValue
    }
};

export default connect(mapStateToProps)(TabPage);