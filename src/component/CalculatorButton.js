import React from 'react';

class CalculatorButton extends React.Component {

    handleClickButton = () => {
        let btnValue = this.props.btnValue;

        if (btnValue.match(/[0-9]/)) {
            // 数字
            this.props.addNumber(btnValue)
        }else if (btnValue.match(/\+|-|\*|\//)){
            // 运算符
            this.props.addOperator(btnValue)

        }else if (btnValue === '=') {
            // 计算结果
            this.props.calculateExpression();

        }

    };

    render() {
        return (
            <button onClick={this.handleClickButton}>
                {this.props.btnValue}
            </button>
        );
    }
}

export default CalculatorButton;