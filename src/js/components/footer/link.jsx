import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, to, ...props }) => {
    return (
        <GatsbyLink to={to} {...props} className='hover:text-accent-primary link'>
            { children }
        </GatsbyLink>
    )
}

export default Link;
