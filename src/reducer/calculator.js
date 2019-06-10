const ADD_NUMBER = 'add_number';
const ADD_OPERATOR = 'add_operator';
const CALCULATE_EXPRESSION = 'calculate_expression';

export default function (state, action) {
    if (!state) {
        state = {
            expression: '',
            result: null,
        };
    }
    switch (action.type) {
        case ADD_NUMBER:
            return {
                expression: state.expression + action.btnValue,
                result: null
            };

        case ADD_OPERATOR:
            let expression = state.expression;
            // 是否已有运算符
            if (state.expression.charAt(state.expression.length).match(/\+|-|\*|\//)) {
                // 替换运算符
                expression = expression.replace(/\+|-|\*|\//, action.btnValue);
            } else {
                expression += action.btnValue;
            }

            return {
                expression: expression,
                result: null
            };
        case CALCULATE_EXPRESSION:
            let result = eval(state.expression);
            return {
                expression: '',
                result: result
            };
        default: {
            return {
                expression: state.expression,
                result: state.result
            }
        }

    }
};

export const addNumber = (btnValue) => {
    return {type: ADD_NUMBER, btnValue};
};

export const addOperator = (btnValue) => {
    return {type: ADD_OPERATOR, btnValue};
};

export const calculateExpression = () => {
    return {type: CALCULATE_EXPRESSION};
};