import React from 'react';
import Header from '../components/header/header';
import Footer from './footer/footer';

const Layout = ({ children }) => {
    return (
        <div className='layout bg-white dark:bg-black dark:text-white min-h-screen overflow-hidden flex flex-col'>
            <Header />

            <main>
                { children }
            </main>

            <Footer />
        </div>        
    )
}

export default Layout;
