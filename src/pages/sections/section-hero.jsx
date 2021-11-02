import React from 'react';
import useTheme from '../../js/hooks/use-theme';
import Section from '../../js/components/section/section';
import Highlight from '../../js/components/section/section-entry/highlight';
import Actions from '../../js/components/actions/actions';
import GitHubButton from 'react-github-btn';

const githubButtonVariants = {
    light: 'no-preference: light; light: light, dark: light;',
    dark: 'no-preference: dark; light: dark; dark: dark;'
}

const SectionHero = () => {
    const { theme } = useTheme();

    return (
        <Section className='section-hero dark:bg-black'
            title={<><Highlight>EdgeWorkers:</Highlight> <br/>Hello World
                </>}
            description='
            Manage Akamai as code, create and deploy microservices, inject Javascript, 
            and manipulate requests and responses at the edge.'
        >   
            <Actions className='justify-center'>
                <button className='btn 
                    btn--slide-up 
                    bg-accent-secondary 
                    border-accent-secondary 
                    text-white 
                    btn 
                    mr-6
                '>
                    Get Started
                </button>

                    <GitHubButton
                        href='https://github.com/ntkme/github-buttons'
                        data-icon='octicon-star'
                        data-size='large'
                        data-show-count='true'
                        aria-label='Star ntkme/github-buttons on GitHub'
                        data-color-scheme={theme(githubButtonVariants)}
                    >
                        Star
                    </GitHubButton>
            </Actions>
        </Section>
    )
}

export default SectionHero;
