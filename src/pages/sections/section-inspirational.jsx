import React from 'react';
import Section from '../../js/components/section/section';
import Highlight from '../../js/components/section/section-entry/highlight';
import { Skew } from '../../js/components/bg3d/bg3d';
import img_design2 from '../../images/design-2.svg';
import img_design3 from '../../images/design-3.svg';
import GalleryPanel from '../../js/components/tabs/gallery-panel';

const SectionInspirational = () => {
    return (
        <Section className='section-inspirational bg-section-alt text-black dark:bg-grey-29 dark:text-white'
            title={<><Highlight>Tools</Highlight> for making modern websites</>}
            description='
                    Arcu odio ut sem nulla pharetra diam sit amet. 
                    Vitae turpis massa sed elementum. Maecenas ultricies 
                    mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
            '
        >
            <GalleryPanel
                image={{
                    image: img_design2,
                    skew: Skew.BOTTOM_RIGHT,
                    position: 'before',
                    className: 'z-10'
                }}
                heading='Lorem ipsum dolor sit amet'
                title='Design Your World'
            >
                Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
            </GalleryPanel>
            
            <GalleryPanel
                image={{
                    image: img_design3,
                    skew: Skew.TOP_LEFT,
                    position: 'after',
                    className: 'z-10'
                }}
                heading='Lorem ipsum dolor sit amet'
                title='Design Your World'
            >
                Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
            </GalleryPanel>
        </Section>
    )
}

export default SectionInspirational;
