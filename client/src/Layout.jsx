import React, { useEffect, useState } from 'react'
import { Footer, Mobile, Navbar } from './components'
import { Outlet } from 'react-router-dom'
import GridLoader from "react-spinners/GridLoader";
const Layout = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [preloader, setPreloader] = useState(false);

    useEffect(() => {
        setPreloader(true);
        setTimeout(() => {
            setPreloader(false);
        }, 3000);
    }, []);
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
            {
                preloader ? (
                    <>
                        <div style={{ display: 'flex', alignItems: "center", height: "100vh", width: "full", justifyContent: "center" }}>

                            <GridLoader
                                color={"#FF1761"}
                                size={50}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                    </>
                ) :
                    (
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


        </>
    )
}

export default Layout