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
                    name: 'Piotr Mynarskim, CTO',
                    // image: img_author,
                    // title: 'CTO'
                }}
            >
                <Highlight>“Whether you’re hosting your web servers on premises or want to go hybrid,</Highlight> Akamai offers the perfect solutions when you’re growing worldwide and need to ensure the best performance and availability."
            </Quote>
        </Section>
    )
}

export default SectionQuote;
