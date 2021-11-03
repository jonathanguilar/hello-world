import React from 'react';
import Section from '../../js/components/section/section';
import Highlight from '../../js/components/section/section-entry/highlight';
import Tabs from '../../js/components/tabs/tabs';
import Tab from '../../js/components/tabs/tab';
import useTheme from '../../js/hooks/use-theme';
import { Skew } from '../../js/components/bg3d/bg3d';

import img_network from '../../images/icon-network.svg';
import img_network_dark from '../../images/icon-network-dark.svg';
import img_todo from '../../images/icon-todo.svg';
import img_todo_dark from '../../images/icon-todo-dark.svg';
import img_files from '../../images/icon-files.svg';
import img_files_dark from '../../images/icon-files-dark.svg';
import img_design1 from '../../images/design-1.svg';
import GalleryPanel from '../../js/components/tabs/gallery-panel';

const iconNetworkVariants = {
    light: img_network,
    dark: img_network_dark
}

const iconTodoVariants = {
    light: img_todo,
    dark: img_todo_dark
}

const iconFilesVariants = {
    light: img_files,
    dark: img_files_dark
}

const SectionGallery = () => {
    const { theme } = useTheme();

    return (
        <Section className='section-gallery bg-white dark:bg-black dark:text-white'
            title={<><Highlight>Learn</Highlight> More</>}
            description='
            Try out our other examples to quickly and easily get started with EdgeWorkers'
        >
            <Tabs>
                <Tab
                    icon={theme(iconNetworkVariants)}
                >
                    <GalleryPanel
                        image={{
                            image: img_design1,
                            skew: Skew.BOTTOM_RIGHT,
                        }}
                        // heading='Lorem ipsum dolor sit amet'
                        title='EdgeKV'
                    >
                        This example demonstrates how you can use EdgeWorkers and EdgeKV to implement 
                        a simple dynamic content assembly, where the HTML response is 
                        dynamically constructed on the edge based on the content of the 
                        Accept-Language header in the client request.
                    </GalleryPanel>
                </Tab>

                <Tab
                    icon={theme(iconTodoVariants)}
                >
                    <GalleryPanel
                        image={{
                            image: img_design1,
                            skew: Skew.BOTTOM_RIGHT
                        }}
                        // heading='Lorem ipsum dolor sit amet'
                        title='Multivariate Testing'
                    >
                        This example enables multivariate testing or simultaneously executed testing. 
                        To create tests, you’ll select variants that will be randomly assigned to a 
                        new user and stored in a cookie. 
                        You’ll pass the variants to the origin via query string. 
                        You can execute custom actions in the request or response phase of each variant. 
                    </GalleryPanel>
                </Tab>

                <Tab
                    icon={theme(iconFilesVariants)}
                >
                    <GalleryPanel
                        image={{
                            image: img_design1,
                            skew: Skew.BOTTOM_RIGHT,
                        }}
                        heading='Lorem ipsum dolor sit amet'
                        title='Design Your World #3'
                    >
                        Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
                    </GalleryPanel>
                </Tab>

                <Tab
                    icon={theme(iconNetworkVariants)}
                >
                    <GalleryPanel
                        image={{
                            image: img_design1,
                            skew: Skew.BOTTOM_RIGHT,
                        }}
                        heading='Lorem ipsum dolor sit amet'
                        title='Design Your World #4'
                    >
                        Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
                    </GalleryPanel>
                </Tab>
{/* 
                <Tab
                    icon={theme(iconTodoVariants)}
                >
                    <GalleryPanel
                        image={{
                            image: img_design1,
                            skew: Skew.BOTTOM_RIGHT
                        }}
                        heading='Lorem ipsum dolor sit amet'
                        title='Design Your World #5'
                    >
                        Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
                    </GalleryPanel>
                </Tab> */}

                {/* <Tab
                    icon={theme(iconFilesVariants)}
                >
                    <GalleryPanel
                        image={{
                            image: img_design1,
                            skew: Skew.BOTTOM_RIGHT
                        }}
                        heading='Lorem ipsum dolor sit amet'
                        title='Design Your World #6'
                    >
                        Arcu odio ut sem nulla pharetra diam sit amet. Vitae turpis massa sed elementum. Maecenas ultricies mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
                    </GalleryPanel>
                </Tab> */}
            </Tabs>
        </Section>
    )
}

export default SectionGallery;
