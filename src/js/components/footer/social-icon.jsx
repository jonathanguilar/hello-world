import React from 'react';
import Img from '../img/img';

const SocialIcon = ({ to, icon }) => {
    return (
        <a href={to} target='_blank' rel='noopener norefferer'>
            <Img image={icon} />
        </a>
    )
}

export default SocialIcon;
