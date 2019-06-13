import React from 'react'
import PropTypes from "prop-types";

/**
 * @author sunpwork
 * 计算器键盘按钮
 */
class CalculatorButton extends React.Component {
    static propTypes = {
        btnValue: PropTypes.string,
        handButtonClick: PropTypes.func
    };

    render() {
        return (
            <button className="btn btn-outline-primary btn-lg btn-block" onClick={this.onButtonClick}>
                {this.props.btnValue}
            </button>
        );
    }

    /**
     * 按钮点击事件
     */
    onButtonClick = () => {
        this.props.handButtonClick(this.props.btnValue);
    };
}

export default CalculatorButton;