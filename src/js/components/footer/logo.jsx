import React from 'react';
import useTheme from '../../hooks/use-theme';
import { Link } from 'gatsby';
import Img from '../img/img';

const Logo = ({ variants }) => {
    const { theme } = useTheme();

    return (
        <Link to='/'>
            <Img className='mx-0' image={theme(variants)} />
        </Link>
    )
}

export default Logo;
