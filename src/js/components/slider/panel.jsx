import React from 'react';

import Img from '../img/img';

const Panel = ({ children, author, ...props }) => {
    return (
        <div className={`panel
            flex
            flex-col
            h-96
            p-3
            md:p-10
            bg-section-alt
            text-black
            dark:text-black
            border-transparent
            rounded-3xl
            mx-2
            mb-12
        `}
        >
            <p>
                { children }
            </p>

            <div className='author mt-auto'>
                <Img className='w-16 h-16 mr-4' image={ author.icon } />

                <div className='details font-semibold'>
                    <h4 className='name text-lg'>{ author.name }</h4>
                    
                    <span className='profession text-accent-secondary text-md'>{ author.title }</span>
                </div>
            </div>
        </div>
    )
}

export default Panel;
