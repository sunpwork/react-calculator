import {Provider} from "react-redux";
import CalculatorApp from "./calculatorApp";
import TabPage from "./tabPage";
import React from "react";
import {Switch, Route} from "react-router-dom";
import {createStore} from "redux";
import CalculatorReducer from "./calculatorApp/reducer/calculator";

const store = createStore(CalculatorReducer);

const Main = () => (
    <main>
        <Provider store={store}>
            <Switch>
                <Route exact path='/' component={CalculatorApp}/>
                <Route exact path='/tabPage' component={TabPage}/>
            </Switch>
        </Provider>
    </main>
);

export default Main;