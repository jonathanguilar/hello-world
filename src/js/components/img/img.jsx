import React from 'react';

const Img = ({ image, className, ...props }) => {
    return (
        <div className={`img-wrapper ${className}`}>
            <img
                src={image}
                alt=''
                {...props}
            />
        </div>
    )
}

Img.defaultProps = {
    className: 'mx-auto flex items-center justify-center'
}

export default Img;
