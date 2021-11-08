import React from 'react';
import Section from '../../js/components/section/section';
import Highlight from '../../js/components/section/section-entry/highlight';
import Slider from '../../js/components/slider/slider';
import Panel from '../../js/components/slider/panel';

import img_author from '../../images/author.svg';

const SectionRecommendations = () => {
    return (
        <Section className='section-recommendations bg-section-primary text-black dark:bg-black dark:text-white'
            title={<><Highlight>Build, secure, and optimize</Highlight> your services and applications with EdgeWorkers.</>}
        >
            <Slider>
                <Panel
                    author={{
                        // icon: img_author,
                        name: 'Deploy JavaScript to the edge.',
                        // title: 'Deploy JavaScript to the edge.'
                    }}
                >
                    Our edge servers support the V8 runtime engine, so compute is now even closer to your end users and their devices. You can now deploy your JavaScript services to the edge to make them faster, more reliable, and more secure - without having to worry about infrastructure or scale.
                </Panel>

                <Panel
                    author={{
                        // icon: img_author,
                        name: 'Avoid unnecessary network hops.',
                        // title: 'Lorem ipsum dolor'
                    }}
                >
                    With Akamai’s edge compute stack, you can run serverless functions directly on the edge, allowing you to shift compute closer to the consumer so you can provide faster applications and services.
                </Panel>

                <Panel
                    author={{
                        // icon: img_author,
                        name: 'Scale your applications elastically.',
                        // title: 'Lorem ipsum dolor'
                    }}
                >
                    Create and deploy microservices across more than 250K edge servers deployed around the globe. When your development teams activate code at the edge, they push data, insights, and logic to the servers closest to your end users.
                </Panel>
            </Slider>
        </Section>
    )
}

export default SectionRecommendations;
