import React from 'react';
import { Link } from 'gatsby';

const FeaturedProject = ({image, title, description, children, aboutLinkRef}) => {
    return (
        <div className='featured-project p-7 bg-white rounded-3xl my-4 lg:my-0 mx-2 lg:mx-4'>
            { image }

            <h3 className='text-2xl font-black py-8'>{ title }</h3>

            <p className='pb-6'>
                { description || children }
            </p>

            <Link to={aboutLinkRef} className='btn
                bg-accent-secondary
                btn--slide-up
                border-accent-secondary
                text-white
            '
            >
                Learn about
            </Link>
        </div>
    )
}

export default FeaturedProject;
