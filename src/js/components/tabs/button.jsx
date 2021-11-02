import React from 'react';
import useTabs from './use-tabs';

const Button = ({ children, index, ...props }) => {
    const { setActiveItem } = useTabs();

    const handleClick = () => {
        setActiveItem(index);
    }

    return (
        <button
            className='min-w-min w-24 h-20 flex items-center justify-center'
            onClick={handleClick}
            {...props}
        >
            { children }
        </button>
    )
}
    
export default Button;
    