import React from 'react'
import {connect} from 'react-redux';
import CalculatorButton from '../components/CalculatorButton';
import {editFirstNumber, editSecondNumber, editOperator, calculate, reset} from "../reducer/calculator";

class CalculatorButtonContainer extends React.Component {
    handleClickButton = () => {
        let btnValue = this.props.btnValue;
        if (btnValue.match(/[0-9]|\./)) {
            // 数字按钮
            if (this.props.operator) {
                // 已输入运算符
                this.props.editSecondNumber(btnValue);
            } else {
                // 未输入运算符
                this.props.editFirstNumber(btnValue);
            }
        } else if (btnValue.match(/\+|-|\*|\//)) {
            // 运算符按钮
            if (this.props.firstNumber) {
                // 输入第一个数字后才能输入运算符
                this.props.editOperator(btnValue)
            }

        } else if (btnValue === '=') {
            // 计算按钮
            this.props.calculate();
        } else if (btnValue === 'AC') {
            this.props.reset();
        }
    };

    render() {
        return (
            <CalculatorButton
                btnValue={this.props.btnValue}
                onClickButton={this.handleClickButton}
            />
        );
    }
}

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