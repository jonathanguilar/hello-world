import React, { Children } from 'react';

const Actions = ({ children, classUl, classLi, justify, className }) => {
    return (
        <div className={`
            py-11
            flex
            items-center
            ${justify} 
            ${className}
        `}
        >
            <ul className={`flex ${classUl}`}>
                {
                    Children.map(children, (child, key) => {
                        return key === 0 ? <li className={`${classLi} flex items-center justify-center`}>{child}</li> : <li className={`${classLi} flex items-center justify-center ml-3`}>{child}</li>;
                    })
                }
            </ul>
        </div>
    )
}

Actions.defaultProps = {
    justify: 'justify-center'
}

export default Actions;
