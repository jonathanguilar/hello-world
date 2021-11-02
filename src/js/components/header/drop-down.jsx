import React from 'react';
import useTheme from '../../hooks/use-theme';
import Chevron from '../svg/chevron';
import Link from './link';

const themeVariants = {
    light: `
        bg-section-alt
        text-black
        border-accent-primary
    `,
    dark: `
        bg-white
        text-black
        border-accent-primary
    `
}

const DropDown = ({ links }) => {
    const { theme } = useTheme();

    return (
        <>
            <Chevron className='chevron ml-2 absolute right-0 -mr-4 hidden lg:block lg:static' />

            <div className={`arrow 
                lg:absolute 
                lg:w-8 
                lg:h-8 
                lg:top-full 
                lg:left-1/2 
                lg:-ml-4 
                lg:mt-1 
                lg:transform 
                lg:rotate-45 
                lg:z-10 
                lg:border-t 
                lg:border-l 
                lg:rounded-md
                hidden
                ${theme(themeVariants)}
            `}
            >
                <div className={`bar
                    lg:absolute 
                    lg:top-1/2 
                    lg:-mt-1 
                    lg:-ml-2 
                    lg:h-1 
                    lg:transform 
                    lg:-rotate-45
                    hidden
                    ${theme(themeVariants)}
                `}
                style={{width: '150%'}}
                >
                </div>
            </div>

            <div className='drop-down
                lg:absolute
                lg:top-full
                lg:-mt-2
                lg:hidden
                lg:leading-8
                static
                block
            '
            >
                <div className={`inner 
                    lg:rounded-lg 
                    lg:p-6 
                    lg:mt-6 
                    lg:border-0
                    lg:w-max
                    lg:h-max
                    flex 
                    flex-col 
                    justify-start 
                    items-start 
                    p-0 
                    my-2 
                    bg-transparent 
                    lg:bg-section-alt 
                    lg:text-black 
                    lg:border-accent-primary 
                    lg:dark:bg-white
                    lg:dark:text-black
                    lg:dark:border-accent-primary
                    border-l-2 
                    rounded-none 
                `}
                >
                    <ul className='links flex flex-col pl-2 lg:pl-0'>
                        {
                            links.map((link, key) =>
                                <li className='link 
                                    hover:text-accent-primary 
                                    w-full
                                '
                                    key={key}
                                > 
                                    <Link to={link.to} className='w-full block text-left lg:text-center'>
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DropDown;
