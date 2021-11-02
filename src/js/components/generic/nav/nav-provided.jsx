import React from 'react';
import { NavProvider } from './use-nav';
import Nav from './nav';

export const NavProvided = ({ children, ...props }) => {
    return (
        <NavProvider>
            <Nav {...props}>
                { children }
            </Nav>
        </NavProvider>
    )
}

export default NavProvided;
