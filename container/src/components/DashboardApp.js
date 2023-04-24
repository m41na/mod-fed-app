import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/dashboardApp';

function DashboardApp() {

    const mountRef = useRef(null);

    useEffect(() => {
        mount(mountRef.current);
    }, []);

    return (
        <div ref={mountRef} />
    )
}

export default DashboardApp