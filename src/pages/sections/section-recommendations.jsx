import React from 'react';
import Section from '../../js/components/section/section';
import Highlight from '../../js/components/section/section-entry/highlight';
import Slider from '../../js/components/slider/slider';
import Panel from '../../js/components/slider/panel';

import img_author from '../../images/author.svg';

const SectionRecommendations = () => {
    return (
        <Section className='section-recommendations bg-section-primary text-black dark:bg-black dark:text-white'
            title={<>Used by <Highlight>400,000+</Highlight> developers</>}
            description='
                    Arcu odio ut sem nulla pharetra diam sit amet. 
                    Vitae turpis massa sed elementum. Maecenas ultricies 
                    mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
            '
        >
            <Slider>
                <Panel
                    author={{
                        icon: img_author,
                        name: 'John Doe',
                        title: 'Lorem ipsum dolor'
                    }}
                >
                    Volutpat odio facilisis mauris sit amet massa vitae tortor. Faucibus turpis in eu mi bibendum neque egestas. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                </Panel>

                <Panel
                    author={{
                        icon: img_author,
                        name: 'John Doe',
                        title: 'Lorem ipsum dolor'
                    }}
                >
                    Volutpat odio facilisis mauris sit amet massa vitae tortor. Faucibus turpis in eu mi bibendum neque egestas. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                </Panel>

                <Panel
                    author={{
                        icon: img_author,
                        name: 'John Doe',
                        title: 'Lorem ipsum dolor'
                    }}
                >
                    Volutpat odio facilisis mauris sit amet massa vitae tortor. Faucibus turpis in eu mi bibendum neque egestas. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                </Panel>

                <Panel
                    author={{
                        icon: img_author,
                        name: 'John Doe',
                        title: 'Lorem ipsum dolor'
                    }}
                >
                    Ultrices eros in cursus turpis massa tincidunt. Donec ac odio tempor orci dapibus ultrices. Blandit aliquam etiam erat velit scelerisque in dictum. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Vel pretium lectus quam id Leo in vitae turpis.
                </Panel>

                <Panel
                    author={{
                        icon: img_author,
                        name: 'John Doe',
                        title: 'Lorem ipsum dolor'
                    }}
                >
                    Volutpat odio facilisis mauris sit amet massa vitae tortor. Faucibus turpis in eu mi bibendum neque egestas. 
                </Panel>
                <Panel
                    author={{
                        icon: img_author,
                        name: 'John Doe',
                        title: 'Lorem ipsum dolor'
                    }}
                >
                    Volutpat odio facilisis mauris sit amet massa vitae tortor. Faucibus turpis in eu mi bibendum neque egestas. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                </Panel>

                <Panel
                    author={{
                        icon: img_author,
                        name: 'John Doe',
                        title: 'Lorem ipsum dolor'
                    }}
                >
                    Volutpat odio facilisis mauris sit amet massa vitae tortor. Faucibus turpis in eu mi bibendum neque egestas. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                </Panel>

                <Panel
                    author={{
                        icon: img_author,
                        name: 'John Doe',
                        title: 'Lorem ipsum dolor'
                    }}
                >
                    Volutpat odio facilisis mauris sit amet massa vitae tortor. Faucibus turpis in eu mi bibendum neque egestas. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                </Panel>

                <Panel
                    author={{
                        icon: img_author,
                        name: 'John Doe',
                        title: 'Lorem ipsum dolor'
                    }}
                >
                    Ultrices eros in cursus turpis massa tincidunt. Donec ac odio tempor orci dapibus ultrices. Blandit aliquam etiam erat velit scelerisque in dictum. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Vel pretium lectus quam id Leo in vitae turpis.
                </Panel>

                <Panel
                    author={{
                        icon: img_author,
                        name: 'John Doe',
                        title: 'Lorem ipsum dolor'
                    }}
                >
                    Volutpat odio facilisis mauris sit amet massa vitae tortor. Faucibus turpis in eu mi bibendum neque egestas. 
                </Panel>
            </Slider>
        </Section>
    )
}

export default SectionRecommendations;
