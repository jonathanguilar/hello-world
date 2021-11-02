import React from 'react';

const Button = ({ label, ...props }) => {
    return (
        <button
            className='px-8 py-4 bg-black text-white rounded-md mt-8'
            {...props}
        >
            { label }
        </button>
    )
}

export default Button;
