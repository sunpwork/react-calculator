import React from 'react'
import CalculatorButton from './button';
import PropTypes from 'prop-types';

/**
 * @author sunpwork
 * 计算器键盘
 */
class CalculatorKeyboard extends React.Component {
    static propTypes = {
        setDisplayValue: PropTypes.func
    };

    constructor() {
        super();
        this.state = {
            firstNumber: '',// 要进行运算的第一个数字
            secondNumber: '',// 要进行运算的第二个数字
            operator: null, // 运算符
            result: null,// 运算结果
        };
    }

    /**
     * 处理键盘按钮的点击事件
     * @param btnValue 点击按钮的值
     */
    handleClickButton = (btnValue) => {
        const setDisplayValue = this.props.setDisplayValue;
        if (btnValue.match(/[0-9]|\./)) {
            // 数字按钮
            if (this.state.operator) {
                // 已输入运算符
                let secondNumber = this.state.secondNumber + btnValue;
                this.setState({secondNumber});
                setDisplayValue(secondNumber);
            } else {
                // 未输入运算符
                let firstNumber = this.state.firstNumber + btnValue;
                this.setState({firstNumber});
                setDisplayValue(firstNumber);
            }
        } else if (btnValue.match(/\+|-|\*|\//)) {
            // 运算符按钮
            if (this.state.firstNumber) {
                // 输入第一个数字后才能输入运算符
                this.setState({
                    operator: btnValue
                });
                setDisplayValue(btnValue);
            }

        } else if (btnValue === '=') {
            // 计算按钮
            if (this.state.firstNumber && this.state.secondNumber && this.state.operator) {
                let result;
                let firstNumber = parseFloat(this.state.firstNumber);
                let secondNumber = parseFloat(this.state.secondNumber);
                switch (this.state.operator) {
                    case '+':
                        result = firstNumber + secondNumber;
                        break;
                    case '-':
                        result = firstNumber - secondNumber;
                        break;
                    case '*':
                        result = firstNumber * secondNumber;
                        break;
                    case '/':
                        result = firstNumber / secondNumber;
                        break;
                    default:
                        return;
                }
                this.setState({
                    firstNumber: result,
                    secondNumber: '',
                    operator: '',
                    result: result,
                    displayValue: result,
                });
                setDisplayValue(result);
            }
        } else if (btnValue === 'AC') {
            // 重置
            this.setState({
                firstNumber: '',// 要进行运算的第一个数字
                secondNumber: '',// 要进行运算的第二个数字
                operator: null, // 运算符
                result: null,// 运算结果
            });
            setDisplayValue('');
        }
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="7"/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="8"/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="9"/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="+"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="4"/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="5"/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="6"/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="-"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="1"/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="2"/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="3"/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="*"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="0"/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="."/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="AC"/>
                    </div>
                    <div className="col-3">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="/"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <CalculatorButton handButtonClick={this.handleClickButton} btnValue="="/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CalculatorKeyboard;