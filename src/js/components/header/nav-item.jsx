import React from 'react';
import { NavItem as Item } from '../generic/nav/nav-item';
import useNav from '../generic/nav/use-nav';

export const NavItem = ({ children, index, ...props }) => {
    const { isItemActive } = useNav();
    const isActive = isItemActive(index);

    return (
        <Item
            className={`item 
                transition-colors 
                duration-200 
                ease-linear 
                flex 
                lg:justify-center 
                lg:align-center 
                lg:relative 
                lg:flex-row 
                w-full 
                pl-4
                flex-col 
                ${isActive ? 'text-accent-primary' : ''} ${children.length > 1 ? 'with-dropdown' : ''}`}
            index={index}
        >
            { children }
        </Item>
    )
}

export default NavItem;
