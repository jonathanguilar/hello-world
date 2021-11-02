import React from 'react';
import Button from './button';
import Img from '../img/img';
import IndexedItem from './indexed-item';

export const Tab = ({ icon, children, isActive, index, ...props }) => {
    return (
        <IndexedItem
            className='border-b-4 duration-200 ease-in-out border-transparent relative' 
            index={index}
            isActive={isActive}
            { ...props }
        >
            <Button>
                <Img image={icon} />
            </Button>

            <div
                className={`
                    h-1
                    z-10
                    absolute
                    w-full
                    transition-transform
                    ease-linear
                    origin-center
                    duration-200
                    ${isActive ? 'bg-accent-secondary transform scale-x-100' : 'bg-transparent transform scale-x-0'}`}
            >
            </div>
        </IndexedItem>
    )
}

export default Tab;
