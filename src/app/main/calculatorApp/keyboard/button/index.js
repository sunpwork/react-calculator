import React from 'react'
import {connect} from 'react-redux';
import CalculatorButton from '../../component/CalculatorButton';
import {editFirstNumber, editSecondNumber, editOperator, calculate, reset} from "../../reducer/calculator";

const CalculatorButtonContainer = (props) => {
    const handleClickButton = () => {
        let btnValue = props.btnValue;
        if (btnValue.match(/[0-9]|\./)) {
            // 数字按钮
            if (props.operator) {
                // 已输入运算符
                props.editSecondNumber(btnValue);
            } else {
                // 未输入运算符
                props.editFirstNumber(btnValue);
            }
        } else if (btnValue.match(/\+|-|\*|\//)) {
            // 运算符按钮
            if (props.firstNumber) {
                // 输入第一个数字后才能输入运算符
                props.editOperator(btnValue)
            }

        } else if (btnValue === '=') {
            // 计算按钮
            props.calculate();
        } else if (btnValue === 'AC') {
            props.reset();
        }
    };

    return (
        <CalculatorButton
            btnValue={props.btnValue}
            onClickButton={handleClickButton}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        firstNumber: state.firstNumber,
        operator: state.operator
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editFirstNumber: (btnValue) => {
            dispatch(editFirstNumber(btnValue));
        },
        editSecondNumber: (btnValue) => {
            dispatch(editSecondNumber(btnValue));
        },
        editOperator: (btnValue) => {
            dispatch(editOperator(btnValue));
        },
        calculate: () => {
            dispatch(calculate());
        },
        reset: () => {
            dispatch(reset());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorButtonContainer);