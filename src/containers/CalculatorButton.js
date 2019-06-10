import {connect} from 'react-redux';
import CalculatorButton from '../component/CalculatorButton';
import {addNumber, addOperator, calculateExpression} from "../reducer/calculator";

const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: (btnValue) => {
            dispatch(addNumber(btnValue));
        },
        addOperator: (btnValue) => {
            dispatch(addOperator(btnValue));
        },
        calculateExpression: () => {
            dispatch(calculateExpression());
        }
    }
};

export default connect(mapDispatchToProps)(CalculatorButton);