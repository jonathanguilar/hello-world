import React, { Children } from 'react';

export const NavItem = ({ children, index, ...props }) => {
    return (
        <li
            index={index}
            {...props}
        >
            {
                Children.map(children, child => (
                    <child.type key={index} index={index} {...child.props}>
                        { child.props.children }
                    </child.type>
                ))
            }
        </li>
    )
}

export default NavItem;
