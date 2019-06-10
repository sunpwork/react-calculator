import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CalculatorApp from './containers/CalculatorApp';
import CalculatorReducer from './reducer/calculator';

const store = createStore(CalculatorReducer);

ReactDOM.render(
    <Provider store={store}>
        <CalculatorApp />
    </Provider>,
    document.getElementById('root')
);

