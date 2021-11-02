import React from 'react';

const SectionEntry = ({ children, ...props }) => {
    return (
        <div
            {...props}
            className={`flex flex-col items-center ${props.className}`}
        >
            { children }   
        </div>
    )
}

export default SectionEntry;
