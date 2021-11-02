import React, { Children } from 'react';

const Socials = ({ children }) => {
    return (
        <ul className='socials flex ml-auto'>
            {
                Children.map(children, (child, key) => (
                    <li key={key} className='px-3'>
                        { child }
                    </li>
                ))
            }
        </ul>
    )
}

export default Socials;
