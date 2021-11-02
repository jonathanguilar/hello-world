import React from 'react';
import Section from '../../js/components/section/section';
import Actions from '../../js/components/actions/actions';
import Img from '../../js/components/img/img';
import Highlight from '../../js/components/section/section-entry/highlight';

import img_check from '../../images/check.svg';

const SectionLegend = () => {
    return (
        <Section className='sectio-legend bg-section-inverse text-white'
            title={<>Learn more about <Highlight>akamai</Highlight></>}
            description='
                Arcu odio ut sem nulla pharetra diam sit amet. 
                Vitae turpis massa sed elementum. Maecenas ultricies 
                mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
            '
        >
            <Actions
                justify='justify-center'
            >
                <button className='btn
                    btn--slide-down
                    border-accent-secondary 
                    bg-accent-secondary 
                    text-white mr-2
                '
                >
                    Download
                </button>

                <button className='btn
                    btn--slide-up
                    text-white
                    border-white
                '
                >
                    Learn more
                </button>
            </Actions>

            <div className='shell py-10'>
                <ul className='checked-list flex flex-col sm:flex-row justify-between'>
                    <li className='flex items-center justify-center pb-4 sm:pb-0'>
                        <Img className='mx-0' image={img_check} />

                        <span className='text-white pl-5'>Lorem ipsum dolor sit amet</span>
                    </li>

                    <li className='flex items-center justify-center pb-4 sm:pb-0'>
                        <Img className='mx-0' image={img_check} />

                        <span className='text-white pl-5'>Lorem ipsum dolor sit amet</span>
                    </li>

                    <li className='flex items-center justify-center pb-4 sm:pb-0'>
                        <Img className='mx-0' image={img_check} />

                        <span className='text-white pl-5'>Lorem ipsum dolor sit amet</span>
                    </li>
                </ul>
            </div>
        </Section>
    )
}

export default SectionLegend;
