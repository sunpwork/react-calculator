import React from 'react'
import PropTypes from "prop-types";

/**
 * @author sunpwork
 * 计算器键盘按钮
 */
const CalculatorButton = (props) => {
    /**
     * 按钮点击事件
     */
    const onButtonClick = () => {
        props.handButtonClick(props.btnValue);
    };
    return (
        <button className="btn btn-outline-primary btn-lg btn-block" onClick={onButtonClick}>
            {props.btnValue}
        </button>
    );
};
CalculatorButton.propTypes = {
    btnValue: PropTypes.string,
    handButtonClick: PropTypes.func
};

export default CalculatorButton;