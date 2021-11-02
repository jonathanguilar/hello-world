import React, { useLayoutEffect, Children } from 'react';
import useTabs from './use-tabs';
import IndexedList from './indexed-list';

const TabsRaw = ({ children }) => {
    const { content, setContent, activeItem } = useTabs();

    useLayoutEffect(() => {
        setContent(
            Children.map(children, (child, key) => (
                React.cloneElement(child.props.children, {...child.props.children, key})
            ))
        );
    }, [children, setContent])

    return (
        <div className='flex flex-col'>
            <div className='tabs-wrapper px-2 sm:px-0 relative'>
                <IndexedList className='flex justify-between h-max items-center z-10 overflow-visible overflow-x-scroll lg:overflow-x-hidden'>
                    { children }
                </IndexedList>

                <div className='bar h-1 bg-grey w-full absolute -bottom-0'>
                    
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center z-10'>
                { content[activeItem] }
            </div>
        </div>
    )
}

export default TabsRaw;
