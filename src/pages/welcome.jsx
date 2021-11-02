import { Link } from 'gatsby';
import React from 'react';
import Actions from '../js/components/actions/actions';
import Img from '../js/components/img/img';
import Layout from '../js/components/layout';
import Section from '../js/components/section/section';

import img_design3 from '../images/design-3.svg';
import FeaturedProject from '../js/components/featured-project/featured-project';

const Welcome = () => {
    return (
        <Layout>
            <Section className='bg-section-primary dark:bg-black dark:text-white'
                title='Welcome to Akamai'
                dangerouslySet="Here you'll find"
            >
                <ul className='flex flex-col lg:flex-row items-center justify-between py-24 px-2 lg:px-0'>
                    <li className='w-full lg:w-1/4 py-4'>
                        <h4 className='font-black text-2xl leading-loose text-center'>Lorem ipsum</h4>

                        <p className='text-xl leading-8'>
                            sVel pharetra vel turpis nunc. Eget duis at tellus at.
                        </p>
                    </li>

                    <li className='w-full lg:w-1/4 py-4'>
                        <h4 className='font-black text-2xl leading-loose text-center'>Lorem ipsum</h4>

                        <p className='text-xl leading-8'>
                            Vel pharetra vel turpis nunc. Eget duis at tellus at.
                        </p>
                    </li>
                  
                    <li className='w-full lg:w-1/4 py-4'>
                        <h4 className='font-black text-2xl leading-loose text-center'>Lorem ipsum</h4>

                        <p className='text-xl leading-8'>
                            Vel pharetra vel turpis nunc. Eget duis at tellus at.
                        </p>
                    </li>
                </ul>

                <Actions
                    justify='justify-center'
                >
                    <Link 
                        to='/contributing' 
                        className='btn
                            btn--slide-up
                        '
                    >
                        Contributing
                    </Link>

                    <Link 
                        to='/coc' 
                        className='btn
                            btn--slide-down
                        '
                    >
                        Code of Conduct
                    </Link>
                </Actions>
            </Section>

            <Section className='bg-section-alt dark:text-black'
                title='Featured Projects'
                description='
                        Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
                '
            >
                    <ul className='featured-projects flex flex-col lg:flex-row lg:px-12'>
                        <FeaturedProject
                            image={<Img image={img_design3}/>}
                            title='Lorem ipsum'
                            aboutLinkRef='/about'
                        >
                            Volutpat odio facilisis mauris sit amet massa vitae tortor. Faucibus turpis in eu mi bibendum neque egestas.
                        </FeaturedProject>

                        <FeaturedProject
                            image={<Img image={img_design3}/>}
                            title='Lorem ipsum'
                            aboutLinkRef='/about'
                        >
                            Volutpat odio facilisis mauris sit amet massa vitae tortor. Faucibus turpis in eu mi bibendum neque egestas.
                        </FeaturedProject>

                        <FeaturedProject
                            image={<Img image={img_design3}/>}
                            title='Lorem ipsum'
                            aboutLinkRef='/about'
                        >
                            Volutpat odio facilisis mauris sit amet massa vitae tortor. Faucibus turpis in eu mi bibendum neque egestas.
                        </FeaturedProject>
                    </ul>
            </Section>
        </Layout>
    )
}

export default Welcome;
