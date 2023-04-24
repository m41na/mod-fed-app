import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Signin from './components/Signin';
import Signup from "./components/Signup";

const genClassName = createGenerateClassName({
    productionPrefix: 'au'
});

function App({ onSignIn, history }) {
    return (
        <StylesProvider generateClassName={genClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin" render={(props) => <Signin onSignIn={onSignIn} {...props} />} />
                    <Route path="/auth/signup" render={(props) => <Signup onSignIn={onSignIn} {...props} />} />
                </Switch>
            </Router>
        </StylesProvider>
    )
}

export default App