import React, { Children } from 'react';

const CategoryGroup = ({ title, children }) => {
    return (
        <li className='py-4 sm:pt-0 min-w-min'>
            <ul className='section-links'>
                <h4 className='section__title pb-3 sm:pb-7 font-bold'>{title}</h4>

                {
                    Children.map(children, (child, key) => (
                        <li key={key} className='leading-loose'>
                            { child }
                        </li>
                    ))
                }
            </ul>                                
        </li>
    )
}

export default CategoryGroup;
