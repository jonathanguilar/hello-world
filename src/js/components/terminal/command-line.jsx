import React from 'react';
import Prompt from './prompt';

const CommandLine = ({ cwd, placeholder }) => {
    return (
        <div className='command-line flex items-center w-full text-base'>
            <Prompt path={cwd} />

            <input 
                type='text' 
                name='command-line-input' 
                id='command-line-input' 
                placeholder={placeholder}
                className='border-transparent outline-none w-2/3'
            /> 
        </div>
    )
}

export default CommandLine;
