import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navber from '../Homepage/navber/Navber';
import Footer from '../Homepage/navber/Footer';
import LoadingSpinner from './LoadingSpinner';
import ScrollToTop from './ScrollToTop';
import BackToTop from './BackToTop';


const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    // Loading simulation
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location]);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Loading Spinner */}
            {isLoading && <LoadingSpinner />}

            {/* Navigation */}
            <header className="sticky top-0 z-50">
                <Navber />
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full">
                <Outlet />
            </main>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>

            {/* Utility Components */}
            <ScrollToTop/>
            <BackToTop />
        </div>
    );
};

export default MainLayout;