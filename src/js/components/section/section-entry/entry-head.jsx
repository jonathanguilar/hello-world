import React from 'react';

const EntryHead = ({ children, ...props }) => {
    return (
        <div
            className={`
                flex
                items-center
                justify-center
                font-black
                text-3xl
                lg:text-6xl
                text-center 
                leading-tight
                ${props.className}
            `}
        >
            <h1>
                { children }
            </h1>   
        </div>
    )
}

export default EntryHead;
