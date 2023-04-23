import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const mount = (root) => {
    ReactDOM.render(<App />, root);
}

if (process.env.NODE_ENV === 'development') {

    const devRoot = document.getElementById("_marketing-dev-root");

    if (devRoot) {
        mount(devRoot);
    }
}

export { mount }