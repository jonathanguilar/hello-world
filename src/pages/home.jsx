import React from 'react';
import Layout from '../js/components/layout';
import Actions from '../js/components/actions/actions';
import Overlap from '../js/components/overlap/overlap';
import Img from '../js/components/img/img';
import BubbleCta from '../js/components/bubble-cta/bubble-cta';

import img_dashboard from '../images/dashboard.png';
import img_heart from '../images/heart.svg';
import SectionHero from './sections/section-hero';
import SectionSteps from './sections/section-steps';
import SectionGallery from './sections/section-gallery';
import SectionInspirational from './sections/section-inspirational';
import SectionTimeline from './sections/section-timeline';
import SectionQuote from './sections/section-quote';
import SectionTerminal from './sections/section-terminal';
import SectionRecommendations from './sections/section-recommendations';
import SectionLegend from './sections/section-legend';

const Home = () => {
    
    return (
        <Layout>
            <SectionHero />

            {/* <Overlap offset='-mb-20 lg:-mb-96'>
                <Img image={img_dashboard} />
            </Overlap>  */}


             {/* <Overlap offset='-mt-48'>
                <BubbleCta
                    icon={<Img className='w-20 h-20' image={img_heart} />}
                    title='Design Your World'
                    description={`
                        Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
                    `}
                >
                    <Actions justify='justify-center lg:justify-start'>
                        <button className='btn
                            btn--slide-up 
                            btn--slide-secondary
                            bg-black
                            border-black
                            text-white
                        '
                        >
                            Get Starteddd
                        </button>
                    </Actions>
                </BubbleCta>
            </Overlap> */}
            
            {/* <SectionInspirational /> */}
{/* 
            <SectionTimeline />  */}

            <SectionQuote />

            <SectionSteps />
            
            <SectionGallery /> 

            <SectionTerminal />

            {/* <SectionRecommendations /> */}
{/* 
            <SectionLegend /> */}
        </Layout>
    )
}

export default Home;
