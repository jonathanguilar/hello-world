import React from 'react';
import Img from '../img/img';

const Quote = ({ children, author }) => {
    return (
        <div className='quote text-3xl sm:text-6xl font-black text-center px-12'>
            { children }

            <div className='author flex flex-col items-center py-16'>
                <Img image={author.image} />

                <h4 className='text-xl font-semibold pt-2'>{ author.name }</h4>

                <span className='text-accent-secondary text-base'>{ author.title }</span>
            </div>
        </div>
    )
}

export default Quote;
