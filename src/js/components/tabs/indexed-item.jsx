import React, { Children } from 'react';

export const IndexedItem = ({ isActive, children, index, ...props }) => {
    return (
        <li
            index={index}
            {...props}
        >
            {
                Children.map(children, child => (
                    React.cloneElement(child, { key: index, index, ...child.props })
                ))
            }
        </li>
    )
}

export default IndexedItem;
