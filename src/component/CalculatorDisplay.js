import React from 'react'

class CalculatorDisplay extends React.Component {
    render() {
        return (
            <div className="row">
                <input className="form-control" style={{textAlign:'right'}} type="text" value={this.props.displayValue}
                       disabled />
            </div>
        );
    }
}

export default CalculatorDisplay;