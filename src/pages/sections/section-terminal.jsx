import React from 'react';
import Section from '../../js/components/section/section';
import Highlight from '../../js/components/section/section-entry/highlight';
import Terminal from '../../js/components/terminal/terminal';
import Code from '../../js/components/terminal/code';

const SectionTerminal = () => {
    return (
        <Section className='section-terminal bg-section-alt text-black dark:bg-grey-29 dark:text-white'
            title={<><Highlight>Tools</Highlight> for making modern websites</>}
            description='
                    Arcu odio ut sem nulla pharetra diam sit amet. 
                    Vitae turpis massa sed elementum. Maecenas ultricies 
                    mi eget mauris pharetra. Ut ornare lectus sit amet est placerat in. 
            '
        >
            <Terminal hasCommandLine>
                <Code speed={50} language='javascript' code={`
                    const Code = ({ code, language }) => {
                        const [writtenCode, setWrittenCode] = useState('');
                        const [ref, isVisible] = usePerspective();
                    
                        useEffect(() => {
                            if (! isVisible) {
                                return;
                            }
                    
                            const fullLength = code.length;
                            const writtenLength = writtenCode.length;
                    
                            if (writtenLength < fullLength) {
                                setTimeout(() => {
                                    setWrittenCode((oldWrittenCode) => {
                                        return code.substring(0, oldWrittenCode.length + 1);
                                    });
                    
                                    Prism.highlightAll();
                                }, 150);
                            } else {
                                Prism.highlightAll();
                            }
                        }, [code, writtenCode, isVisible]);
                    
                        return (
                            <div ref={ref} className='code flex align-top'>
                                <pre className='m-0 line-numbers' data-start='1'>
                                    <code className={\`language-\${language}\`}>{ writtenCode }</code>
                                </pre>
                            </div>
                        )
                    }
                `}/>
            </Terminal>
        </Section>
    )
}

export default SectionTerminal;
