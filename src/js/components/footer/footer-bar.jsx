import React from 'react';

const FooterBar = ({ copyright, children }) => {
    return (
        <div className='bar flex items-center h-20 border-t-2 border-section-alt dark:border-grey-alt'>
            <span className='copyright'>&copy; {new Date().getFullYear()} {copyright}</span>

            { children }
        </div>
    )
}

export default FooterBar;
