import React, { useEffect, useState } from 'react'
import { Footer, Mobile, Navbar } from './components'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    return (
        <>
            {isMobile ? (
                <Mobile />
            ) : (
                <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>
            )}
        </>
    )
}

export default Layout