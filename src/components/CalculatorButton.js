import React from 'react';

class CalculatorButton extends React.Component {
    handleClickButton = () => {
        if (this.props.onClickButton) {
            this.props.onClickButton(this.props.btnValue);
        }
    };

    render() {
        return (
            <button className="btn btn-outline-primary btn-lg btn-block"
                onClick={this.handleClickButton}>
                {this.props.btnValue}
            </button>
        );
    }
}

export default CalculatorButton;