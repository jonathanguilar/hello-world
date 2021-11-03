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
        <Section className='section-steps bg-section-inverse pt-12 mt-12 text-white'
            title={<>Hello<Highlight>World</Highlight></>}
            description='
            Once you have verified that you have met the prerequisites, 
            you can follow this guide to learn how to get an EdgeWorkers function up and running on your site. 
 
            '
        >
            <Steps>
                <Step
                    icon={img_network_dark}
                    title='Create an EdgeWorkers ID'
                >
                    <ul>
                        <li>Generate a secret key with the EdgeWorkers CLI command: akamai edgeworkers secret</li>
                        <li>Add a user-defined variable named, EW_DEBUG_KEY to your property.</li>
                        <li>Add a user-defined variable named, EW_DEBUG_KEY to your property.</li>
                    </ul>
                    Activate and manage your Hello World code bundle. 
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
