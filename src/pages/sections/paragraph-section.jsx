import React from 'react';
import Section from '../../js/components/section/section';
import Highlight from '../../js/components/section/section-entry/highlight';
import EntryBody from '../../js/components/section/section-entry/entry-body';
const ParagraphSection = () => {
    return (
        <Section
            title={<><Highlight>Hello</Highlight> World</>}
            description='
            Once you have verified that you have met the prerequisites, you can follow this guide to learn how to get an EdgeWorkers function up and running on your site. '
        >
            <EntryBody>
                
            </EntryBody>
        </Section>
    )
}

export default ParagraphSection;