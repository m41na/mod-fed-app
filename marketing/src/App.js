import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from './components/Landing';
import Pricing from "./components/Pricing";

const genClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

function App({ history }) {
    return (
        <StylesProvider generateClassName={genClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    )
}

export default App
