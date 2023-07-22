import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import useAuthCheck from '../../config/useAuthCheck';

const Layout = ({ children }: { children: React.ReactNode }) => {

    // Authentication checking
    const authChecked = useAuthCheck();
    if (!authChecked) {
        return <div className='text-center'>Checking authentication....</div>;
    }

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout