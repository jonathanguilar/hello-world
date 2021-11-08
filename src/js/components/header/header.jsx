import React, { useState } from 'react';
import { Nav as NavBar } from '../generic/nav/nav';
import { NavItem as Item } from './nav-item';
import Link from './link';
import Logo from './logo';
import DropDown from './drop-down';
import useTheme from '../../hooks/use-theme';
import Actions from '../actions/actions';

import logo_light from '../../../images/logo.png';
import logo_dark from '../../../images/logo-dark.svg';
import HamburgerMenu from './hamburger-menu';

const logo = {
    light: logo_light,
    dark: logo_dark
}

const switchVariants = {
    light: `
        bg-black
        text-white
        border-accent-primary
    `,
    dark: `
        bg-section-alt
        text-black
        border-accent-secondary
    `
}

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [showSideMenu, setShowSideMenu] = useState(false);

    const toggle = () => {
        
        setShowSideMenu(! showSideMenu);
    }

    return (
        <div className='header dark:bg-black dark:text-white'>
            <div className='container
                flex
                justify-between
                items-center
                max-w-full
                px-2
                lg:w-max
            '
            >
                <Logo logo={theme(logo)} />

                <div className='nav-wrapper
                    lg:flex 
                    lg:items-center 
                    lg:justify-between
                    lg:leading-none 
                    lg:w-max
                    transition-all
                    justify-between
                    w-full
                    -ml-2
                    relative
                    text-2xl
                    leading-loose
                '
                >
                    <HamburgerMenu isActive={showSideMenu} toggle={toggle} />

                    <NavBar className={`nav 
                        flex 
                        lg:justify-between 
                        lg:items-center 
                        lg:pt-4 
                        lg:static 
                        lg:flex 
                        lg:flex-row 
                        lg:min-w-max 
                        lg:h-full 
                        lg:bg-transparent 
                        lg:text-base 
                        lg:mr-8 
                        lg:overflow-visible 
                        transition-all 
                        overflow-hidden 
                        flex-col 
                        pt-28 
                        justify-start 
                        bg-section-alt 
                        dark:bg-white
                        dark:text-black
                        lg:dark:bg-transparent
                        lg:dark:text-white
                        absolute
                        top-0 
                        right-0
                        pr-4
                        z-40 
                        min-h-max
                        items-start 
                        w-1x3/5
                        transform
                        -mr-4
                        sm:mr-0
                        lg:transform-none
                        ${showSideMenu ? 'translate-x-0' : 'translate-x-full'}
                    `}
                    >
                        <Item>
                            <a href="https://techdocs.akamai.com/edgeworkers/docs/welcome-to-edgeworkers">
                                EdgeWorkers
                            </a>
{/*                         
                            <DropDown
                                links={[
                                        { to: '/welcome', label: 'Welcome' },
                                        { to: '/maecenas', label: 'Maecenas' },
                                        { to: '/ultricies-mi', label: 'Ultricies mi' },
                                        { to: '/eget-mauris', label: 'Eget mauris' },
                                        { to: '/pharetra', label: 'Pharetra' }
                                ]} 
                            /> */}
                        </Item>
            
                        <Item>
                            <a href="https://techdocs.akamai.com/edgeworkers/recipes">
                                Recipes 
                            </a>
                        </Item>
            
                        <Item>
                            <a href="https://techdocs.akamai.com/edgeworkers/reference/api">
                                API
                            </a>
                        </Item>

                        <Item>
                            <Actions classUl='lg:ml-12 w-full flex-col lg:flex-row items-end lg:items-center' classLi='mt-4 lg:mt-0 w-full'>
                                {/* <button className='w-full btn btn--slide-up'>
                                    Mailing List
                                </button>
                                 */}
                                {/* <button className='w-full btn btn--slide-down bg-accent-secondary border-accent-secondary text-white'>
                                    EdgeWorkers
                                </button>  */}
                            </Actions>
                        </Item>
                    </NavBar>
                </div>
            </div>
        </div>
    )
}

export default Header;
