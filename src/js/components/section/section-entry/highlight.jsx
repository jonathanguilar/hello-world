import React from 'react';

const Highlight = ({ children, className, ...props }) => {
    return (
        <strong
            { ...props }
            className={`${props.className} text-accent-primary`}
        >
            { children }
        </strong>        
    )
}

export default Highlight;
