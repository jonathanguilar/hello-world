import React from 'react'

const Chevron = ({ fill, stroke, ...props }) => {
    return (
        <i {...props}>
            <svg 
                xmlns='http://www.w3.org/2000/svg' 
                width='9.434' 
                height='5.778'
            >
                <path data-name='Path 1' d='m1.06 1.06 3.656 3.656L8.372 1.06' fill={fill} stroke={stroke} strokeLinecap='round' strokeWidth='1.5'/>
            </svg>
        </i>
    )
}
    
Chevron.defaultProps = {
    fill: 'none',
    stroke: 'currentColor'
}

export default Chevron
    