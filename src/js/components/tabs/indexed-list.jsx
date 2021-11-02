import React, { Children } from 'react'
import useTabs from './use-tabs';

const IndexedList = ({ children, itemActiveWhen, ...props }) => {
    const { isItemActive } = useTabs();

    return (
        <ul {...props}>
           {
               Children.map(children, (child, index) => (
                   React.cloneElement(child, {key: index, index, isActive: isItemActive(index)})
               ))
           }
        </ul>
    )
}

IndexedList.defaultProps = {
    itemActiveWhen: () => false
}

export default IndexedList;
