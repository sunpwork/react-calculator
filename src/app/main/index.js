import CalculatorApp from "./calculatorApp";
import TabPage from "./tabPage";
import React from "react";
import {Switch, Route} from "react-router-dom";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            calcDisplayValue: ''
        };
    }

    handCalcDisplayValue = (calcDisplayValue) => {
        this.setState({calcDisplayValue});
    };

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' render={() => (
                        <CalculatorApp handCalcDisplayValue={this.handCalcDisplayValue}/>
                    )}/>
                    <Route exact path='/tabPage' render={() => (
                        <TabPage calcDisplayValue={this.state.calcDisplayValue}/>
                    )}/>
                </Switch>
            </main>
        );
    }
}

export default Main;