import React from 'react';

const BubbleCta = ({ icon, title, children, description, ...props }) => {
    return (
        <div { ...props } className='bubble'>
            <div className='
                flex
                items-center
                border-0
                border-transparent 
                rounded-3xl 
                bg-accent-primary
                sm:p-20
                sm:flex-row
                flex-col
                p-4
            '
            >
                <div className='sm:mr-16'>
                    { icon } 
                </div>
                
                <div>
                    <h2 className='text-6xl text-white my-8 sm:mt-0 text-center md:text-left'>{ title }</h2>

                    <p className='leading-relaxed text-white text-2xl sm:text-base'>
                        { description }
                    </p>

                    { children }
                </div>
            </div>
        </div>                
    )
}

export default BubbleCta;
