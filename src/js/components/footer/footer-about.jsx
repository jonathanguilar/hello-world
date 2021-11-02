import React from 'react';

const FooterAbout = ({ logo, children, description }) => {
    return (
        <div className='about flex flex-col w-96 pb-7 lg:pb-0 lg:w-max'> 
            { logo }

            <p className='pt-5'>
                { children || description }
            </p>
        </div>
    )
}

export default FooterAbout;
