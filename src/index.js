import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import CalculatorApp from './containers/CalculatorApp';
import CalculatorReducer from './reducer/calculator';
import TabPage from "./containers/TabPage";

const store = createStore(CalculatorReducer);

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/tabPage'>TabPage</Link></li>
            </ul>
        </nav>
    </header>
);

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

const App = () => (
    <div>
        <Header/>
        <Main/>
    </div>
);


ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('root')
);

