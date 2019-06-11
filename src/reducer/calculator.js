const EDIT_FIRST_NUMBER = 'edit_first_number';
const EDIT_SECOND_NUMBER = 'edit_second_number';
const EDIT_OPERATOR = 'edit_operator';
const CALCULATE = 'calculate';
const RESET = 'reset';

export default function (state, action) {
    if (!state) {
        state = {
            displayValue: '',
            firstNumber: '',
            secondNumber: '',
            operator: null,
            result: null,
        };
    }
    switch (action.type) {
        case EDIT_FIRST_NUMBER:
            return {
                ...state,
                displayValue: state.firstNumber + action.btnValue,
                firstNumber: state.firstNumber + action.btnValue
            };

        case EDIT_SECOND_NUMBER:
            return {
                ...state,
                displayValue: state.secondNumber + action.btnValue,
                secondNumber: state.secondNumber + action.btnValue
            };
        case EDIT_OPERATOR:
            return {
                ...state,
                displayValue: action.btnValue,
                operator: action.btnValue
            };
        case CALCULATE:
            if (state.firstNumber && state.secondNumber && state.operator) {
                let result;
                let firstNumber = parseFloat(state.firstNumber);
                let secondNumber = parseFloat(state.secondNumber);
                switch (state.operator) {
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
                }

                return {
                    firstNumber: result,
                    secondNumber: '',
                    operator: '',
                    result: result,
                    displayValue: result,
                };
            } else {
                return state;
            }
        case RESET:
            return {
                displayValue: '',
                firstNumber: '',
                secondNumber: '',
                operator: null,
                result: null,
            };
        default:
            return state;

    }
};

export const editFirstNumber = (btnValue) => {
    return {type: EDIT_FIRST_NUMBER, btnValue};
};

export const editSecondNumber = (btnValue) => {
    return {type: EDIT_SECOND_NUMBER, btnValue};
};

export const editOperator = (btnValue) => {
    return {type: EDIT_OPERATOR, btnValue};
};

export const calculate = () => {
    return {type: CALCULATE};
};
export const reset = () => {
    return {type: RESET};
};