import React, { Children } from 'react';

export const Steps = ({ children }) => {    

    return (
        <div className='steps mt-20 mb-40 bg-current'>
            <ul className='w-full z-20 flex justify-center sm:justify-between flex-wrap'>
                {
                    Children.map(children, (child, index) => (
                        React.cloneElement(child, {key: index, index: ++index, count: children.length, ...child.props })
                    ))
                }
            </ul>
        </div>
    )
}

export default Steps;
