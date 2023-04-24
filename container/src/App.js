import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Router, Redirect, useHistory } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Progress from './components/Progress';
const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'))

const genClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const history = createBrowserHistory();

function App() {

    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        if (signedIn) {
            history.push("/dashboard");
        }
    }, [signedIn]);

    return (
        <StylesProvider generateClassName={genClassName}>
            <Router history={history}>
                <div>
                    <Header signedIn={signedIn} onSignOut={() => setSignedIn(false)} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth" render={(props) => <AuthLazy onSignIn={() => setSignedIn(true)} {...props} />} />
                            <Route path="/dashboard">
                                {!signedIn && <Redirect to="/" />}
                                {signedIn && <DashboardLazy />}
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </StylesProvider>
    )
}

export default App