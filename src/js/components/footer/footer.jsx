import React from 'react';
import Link from './link';
import Nav from './nav';
import Section from '../section/section';

import img_icon_facebook from '../../../images/icon-facebook.svg';
import img_icon_twitter from '../../../images/icon-twitter.svg';
import img_icon_github from '../../../images/icon-github.svg';
import img_icon_youtube from '../../../images/icon-youtube.svg';
import CategoryGroup from './category-group';
import Logo from './logo';

import logo_light from '../../../images/logo.png';
import logo_dark from '../../../images/logo-dark.svg';
import FooterAbout from './footer-about';
import Socials from './socials';
import SocialIcon from './social-icon';
import FooterBar from './footer-bar';

const logoVariants = {
    light: logo_light,
    dark: logo_dark
}

const Footer = () => {
    return (
        <Section padding='pt-10' className='footer bg-section-primary dark:bg-black dark:text-white px-2 lg:px-0 mt-auto'>
                <div className='inner text-xl sm:text-base flex flex-col sm:flex-row'>
                    <FooterAbout
                        logo={<Logo variants={logoVariants} />}    
                    >
                        Facilisis magna etiam tempor orci eu lobortis elementum. Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum.
                    </FooterAbout>

                    <Nav>
                        <CategoryGroup title='API References'>
                            <Link to='/'>
                                Maecenas
                            </Link>

                            <Link to='/'>
                                Ultricies mi
                            </Link>

                            <Link to='/'>
                                Eget mauris
                            </Link>

                            <Link to='/'>
                                Pharetra
                            </Link>
                        </CategoryGroup>

                        <CategoryGroup title='Documentation'>
                            <Link to='/'>
                                Feugiat sed 
                            </Link>

                            <Link to='/'>
                                Lectus vestibulum 
                            </Link>

                            <Link to='/'>
                                Mattis 
                            </Link>

                            <Link to='/'>
                                Ullamcorper velit 
                            </Link>
                        
                            <Link to='/'>
                                Sed ullamcorper   
                            </Link>

                            <Link to='/'>
                                Morbi
                            </Link>
                        </CategoryGroup>

                        <CategoryGroup title='Github'>
                            <Link to='/'>
                                Maecenas 
                            </Link>

                            <Link to='/'>
                                Ultricies mi  
                            </Link>

                            <Link to='/'>
                                Eget mauris  
                            </Link>

                            <Link to='/'>
                                Pharetra 
                            </Link>
                        </CategoryGroup>

                        <CategoryGroup title='Discord'> 
                            <Link to='/'>
                                Volutpat  
                            </Link>

                            <Link to='/'>
                                Odio facilisis 
                            </Link>

                            <Link to='/'>
                                Mauris sit 
                            </Link>

                            <Link to='/'>
                                Amet massa 
                            </Link>

                            <Link to='/'>
                                Vitae tortor
                            </Link>
                        </CategoryGroup>
                    </Nav>
                </div>

                <FooterBar copyright='Akamai'> 
                    <Socials>
                        <SocialIcon to='https://facebook.com' icon={img_icon_facebook} />

                        <SocialIcon to='https://twitter.com' icon={img_icon_twitter} />

                        <SocialIcon to='https://github.com' icon={img_icon_github} />

                        <SocialIcon to='https://youtube.com' icon={img_icon_youtube} />
                    </Socials>
                </FooterBar>
        </Section>
    )
}

export default Footer;
