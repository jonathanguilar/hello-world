import React from 'react';

const EntryBody = ({ children, ...props }) => {
    return (
        <div className="shell">
            <p
                {...props}
                className={`
                    py-8 
                    px-2
                    lg:px-0
                    text-center 
                    text-xl
                    ${props.className}
                `}
            >
                { children }
            </p>
        </div>
    )
}

export default EntryBody;
