import React from 'react';
import Img from '../img/img';

const Step = ({ icon, index, count, title, children, ...props }) => {
    return (
        <li
            className={`step z-10 flex flex-col w-full md:w-52 items-center bg-current mb-8 lg:mb-0`}
            {...props}
        >
            <div className='step__icon flex flex-col items-center mb-4' data-count={count}>
                {
                    <Img
                        image={icon} 
                        className='icon w-full h-full border-2 border-accent-secondary rounded-full p-8'
                    /> 
                }
            </div>

            <h3 className='index text-5xl text-accent-primary mb-4'>{ index }</h3>

            <h4 className='title text-2xl text-white mb-4'>{ title }</h4>

            <p className='text-center text-white'>
                { children }
            </p>
        </li>
    )
}

export default Step;
