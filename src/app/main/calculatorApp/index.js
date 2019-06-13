import React from 'react'
import CalculatorKeyBoard from './keyboard';
import CalculatorDisplay from "./display";
import PropTypes from 'prop-types'

/**
 * @author sunpwork
 * 计算器 App
 */
class CalculatorApp extends React.Component {

    static propTypes = {
        handCalcDisplayValue: PropTypes.func
    };

    constructor() {
        super();
        this.state = {
            displayValue: '', // display 显示的内容

            firstNumber: '',// 要进行运算的第一个数字
            secondNumber: '',// 要进行运算的第二个数字
            operator: null, // 运算符
            result: null,// 运算结果
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    /**
     * 处理键盘按钮的点击事件
     * @param btnValue 点击按钮的值
     */
    handleButtonClick(btnValue) {
        let updateParams = {};
        if (btnValue.match(/[0-9]|\./)) {
            // 数字按钮
            if (this.state.operator) {
                // 已输入运算符
                let secondNumber = this.state.secondNumber + btnValue;
                updateParams = {
                    secondNumber,
                    displayValue: secondNumber
                };
            } else {
                // 未输入运算符
                let firstNumber = this.state.firstNumber + btnValue;
                updateParams = {
                    firstNumber,
                    displayValue: firstNumber
                };
            }
        } else if (btnValue.match(/\+|-|\*|\//)) {
            // 运算符按钮
            if (this.state.firstNumber) {
                // 输入第一个数字后才能输入运算符
                this.setState({
                    operator: btnValue,
                    displayValue: btnValue
                });
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
                updateParams = {
                    firstNumber: result,
                    secondNumber: '',
                    operator: '',
                    result: result,
                    displayValue: result,
                };
            }
        } else if (btnValue === 'AC') {
            // 重置
            updateParams = {
                firstNumber: '',// 要进行运算的第一个数字
                secondNumber: '',// 要进行运算的第二个数字
                operator: null, // 运算符
                result: null,// 运算结果
                displayValue: ''
            };
        }
        this.setState(updateParams);
        if (updateParams.displayValue && this.props.handCalcDisplayValue) {
            this.props.handCalcDisplayValue(updateParams.displayValue);
        }
    };

    render() {
        return (
            <div>
                <CalculatorDisplay displayValue={this.state.displayValue}/>
                <CalculatorKeyBoard handleButtonClick={this.handleButtonClick}/>
            </div>
        )
    }
}

export default CalculatorApp;