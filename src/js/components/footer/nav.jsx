import React from 'react';

const Nav = ({ children }) => {
    return (
        <ul className='nav flex flex-col sm:flex-row w-full justify-between ml-4'>
            { children }
        </ul>
    )
}

export default Nav;
