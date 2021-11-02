import React from 'react';
import Section from '../../js/components/section/section';
import Highlight from '../../js/components/section/section-entry/highlight';
import Timeline from '../../js/components/timeline/timeline';
import Milestone from '../../js/components/timeline/milestone';

const SectionTimeline = () => {
    return (
        <Section className='section-timeline bg-section-inverse text-white'
            title={<>Learn more about <Highlight>akamai</Highlight></>}
            description='
                    Arcu odio ut sem nulla pharetra diam sit amet. 
                    Vitae turpis massa sed elementum. Maecenas ultricies 
                    mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
            '
        >
            <Timeline>
                <Milestone 
                    title='Early Access'
                    version='0.8'
                    year='2018'
                    description='Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in.'
                />

                <Milestone 
                    isCurrent
                    title='Beta'
                    version='0.9'
                    year='2019'
                    description='Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in.'
                />

                <Milestone 
                    title='Stable Build'
                    version='1.0'
                    year='2020'
                    description='Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in.'
                />

                <Milestone 
                    title='Optimizations'
                    version='2.0'
                    year='2021'
                    description='Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in.'
                /> 

                <Milestone 
                    title='Portable'
                    version='3.0'
                    year='2022'
                    description='Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in.'
                />
            </Timeline>
        </Section>
    )
}

export default SectionTimeline;
