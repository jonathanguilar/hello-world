import React, { useRef, useEffect } from 'react';

const HamburgerMenu = ({ isActive, toggle }) => {
    const burgerRef = useRef();

    useEffect(() => {
        if (burgerRef.current.classList.length > 1) {
            burgerRef.current.classList.remove('active');
        }
        else {
            burgerRef.current.classList.add('active');
        }
    }, [burgerRef])

    return (
        <div className={`hamburger-wrapper 
            w-20 
            h-36
            flex
            items-center
            justify-center 
            mr-0
            ml-auto
            lg:hidden
            lg:w-0
            `}
        >
            <button 
                className={`hamburger 
                    lg:hidden 
                    mx:auto
                    ${isActive ? 'active' : ''}
                `}
                onClick={toggle}
                ref={burgerRef} 
            >
                <div className='bar'></div>

                <div className='bar'></div>

                <div className='bar'></div>
            </button>

            <button 
                className={`overlay 
                    fixed
                    w-0 
                    h-0 
                    top-0
                    left-0
                    z-30
                    cursor-default
                    transition-opacity
                    duration-200
                    bg-grey-29
                    lg:hidden
                    ${isActive ? 'w-screen h-screen opacity-60' : 'w-0 h-0 opacity-0'}
                `}
                onClick={toggle}
            >
            </button>
        </div>
    )
}

export default HamburgerMenu;
