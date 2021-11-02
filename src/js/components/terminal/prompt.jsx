import React from 'react';

const Prompt = ({ path }) => {
    return (
        <div className='command-line-prompt min-w-max'>
            <span data-prompt={path} data-fancy='→'></span>
        </div>
    )
}

export default Prompt;
