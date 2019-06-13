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
            displayValue: '' // display 显示的内容
        };
    }

    /**
     * 更新 display 显示的值
     * @param displayValue display 要显示的值
     */
    setDisplayValue = (displayValue) => {
        this.setState({displayValue});
        if (this.props.handCalcDisplayValue) {
            this.props.handCalcDisplayValue(displayValue);
        }
    };

    render() {
        return (
            <div>
                <CalculatorDisplay displayValue={this.state.displayValue}/>
                <CalculatorKeyBoard setDisplayValue={this.setDisplayValue}/>
            </div>
        )
    }
}

export default CalculatorApp;