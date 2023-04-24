import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import MarketingApp from '../components/MarketingApp';
import Header from './components/Header';

const genClassName = createGenerateClassName({
    productionPrefix: 'co'
});

function App() {
    return (
        <StylesProvider generateClassName={genClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}

export default App