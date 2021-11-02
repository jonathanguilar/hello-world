import * as React from 'react'
import { Link } from 'gatsby'
import Section from '../js/components/section/section'
import Layout from '../js/components/layout';

const NotFoundPage = () => {
    return (
        <Layout>
            <Section className='bg-section-primary dark:bg-black py-12'>
                <div className='content flex flex-col mx-auto items-center'>
                    <h1 className='text-8xl text-accent-secondary py-8'>Ooops...</h1>

                    <h2 className='dark:text-white text-6xl font-black py-8'>Page not found</h2>

                    <Link 
                        to='/home'
                        className='btn
                            bg-accent-secondary
                            border-accent-secondary
                            btn--slide-up
                        '
                    >
                        Go to homepage
                    </Link>
                </div>
            </Section>
        </Layout>
    )
}
    
export default NotFoundPage
    