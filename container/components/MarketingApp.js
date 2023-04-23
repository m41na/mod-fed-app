import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/marketingApp';

console.log(mount);

function MarketingApp() {

    const mountRef = useRef(null);

    useEffect(() => {
        mount(mountRef.current)
    }, []);

    return (
        <div ref={mountRef} />
    )
}

export default MarketingApp