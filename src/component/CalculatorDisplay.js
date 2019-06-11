import React from 'react'

class CalculatorDisplay extends React.Component {
    render() {
        return (
            <div>{this.props.displayValue}</div>
        );
    }
}

export default CalculatorDisplay;