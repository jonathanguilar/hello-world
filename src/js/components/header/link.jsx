import React from 'react';
import { navigate } from 'gatsby';
import useNav from '../generic/nav/use-nav';

const Link = ({ children, index, className, to, ...props }) => {
    const { setActiveItem } = useNav();

    const handleClick = () => {
        setActiveItem(index);
        navigate(to);
    }

    return (
        <button onClick={handleClick} className={`link w-full text-left min-w-max lg:text-center ${className}`} {...props}>
            { children }
        </button>
    )
}

export default Link;
