import React from 'react';
import { Link } from 'gatsby';
import useNav from '../generic/nav/use-nav';
import Img from '../img/img';

const Logo = ({ logo }) => {
    const { setActiveItem } = useNav();

    const handleClick = () => {
        setActiveItem(-1);
    }

    return (
        <Link to='/' className='logo pb-2 lg:mr-12 w-full h-full' onClick={handleClick}>
            <Img image={logo} />
        </Link>
    )
}

export default Logo;
