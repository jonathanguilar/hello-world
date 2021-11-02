import React from 'react';
import Section from '../../js/components/section/section';
import Highlight from '../../js/components/section/section-entry/highlight';
import Steps from '../../js/components/steps/steps';
import Step from '../../js/components/steps/step';

import img_network_dark from '../../images/icon-network-dark.svg';
import img_todo_dark from '../../images/icon-todo-dark.svg';
import img_files_dark from '../../images/icon-files-dark.svg';

const SectionSteps = () => {
    return (
        <Section className='section-steps bg-section-inverse pt-12 mt-12 lg:pt-96 text-white'
            title={<>Learn more about <Highlight>akamai</Highlight></>}
            description='
                    Arcu odio ut sem nulla pharetra diam sit amet. 
                    Vitae turpis massa sed elementum. Maecenas ultricies 
                    mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
            '
        >
            <Steps>
                <Step
                    icon={img_network_dark}
                    title='Lorem ipsum'
                >
                    Vel pharetra vel turpis nunc. Eget duis at tellus at. 
                </Step>

                <Step
                    icon={img_todo_dark}
                    title='Lorem ipsum'
                >
                    Vel pharetra vel turpis nunc. Eget duis at tellus at. 
                </Step>

                <Step
                    icon={img_files_dark}
                    title='Lorem ipsum'
                >
                    Vel pharetra vel turpis nunc. Eget duis at tellus at. 
                </Step>
            </Steps>        
        </Section>
    )
}

export default SectionSteps;
