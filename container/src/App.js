import React, { useState, lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Header from './components/Header';
import Progress from './components/Progress';
const AuthLazy = lazy(() => import('./components/AuthApp'))
const MarketingLazy = lazy(() => import('./components/MarketingApp'))

const genClassName = createGenerateClassName({
    productionPrefix: 'co'
});

function App() {

    const [signedIn, setSignedIn] = useState(false);

    return (
        <StylesProvider generateClassName={genClassName}>
            <BrowserRouter>
                <div>
                    <Header signedIn={signedIn} onSignOut={() => setSignedIn(false)} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth" render={(props) => <AuthLazy onSignIn={() => setSignedIn(true)} {...props} />} />
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}

export default App