import React from 'react';
import Section from '../../js/components/section/section';
import Highlight from '../../js/components/section/section-entry/highlight';
import img_author from '../../images/author.svg';
import Quote from '../../js/components/quote/quote';

const SectionQuote = () => {
    return (
        <Section className='section-quote bg-white text-black dark:bg-black dark:text-white'>
            <Quote
                author={{
                    name: 'John Doe',
                    image: img_author,
                    title: 'Lorem ipsum dolor'
                }}
            >
                <Highlight>Lorem ipsum dolor sit amet</Highlight>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum. 
            </Quote>
        </Section>
    )
}

export default SectionQuote;
