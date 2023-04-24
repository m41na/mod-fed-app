import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/authApp';

function AuthApp({ onSignIn }) {

    const mountRef = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(mountRef.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            onSignIn,
        });

        history.listen(onParentNavigate);
    }, []);

    return (
        <div ref={mountRef} />
    )
}

export default AuthApp