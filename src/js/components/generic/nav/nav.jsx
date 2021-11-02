import React, { Children } from 'react'

export const Nav = ({ children, itemActiveWhen, ...props }) => {
    return (
        <ul {...props}>
           {
               Children.map(children, (child, index) => (
                   React.cloneElement(child, {key: index, index, itemCount: children.length, ...child.props})
               ))
           }
        </ul>
    )
}

Nav.defaultProps = {
    itemActiveWhen: () => false
}

export default Nav
