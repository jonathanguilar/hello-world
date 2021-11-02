import React from 'react';

const Overlap = ({ children, offset, className, ...props }) => {
    return (
        <div className={`overlap ${className ? className : ''}`}>
            <div className="container">
                <div { ...props } className={`${offset}`}>
                    { children }
                </div>
            </div>
        </div>
        
    )
}

export default Overlap;
