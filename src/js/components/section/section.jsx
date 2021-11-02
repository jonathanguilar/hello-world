import React from 'react';
import SectionEntry from './section-entry/section-entry';
import EntryHead from './section-entry/entry-head';
import EntryBody from './section-entry/entry-body';

const Section = ({ children, padding, title, dangerouslySet, description, ...props }) => {
    if (dangerouslySet) {
        return (
            <div className={`section ${padding} ${props.className}`}>
                <div className='container'>
                    <SectionEntry>
                        <EntryHead className='text-3xl lg:text-8xl text-accent-secondary'>
                            { title }
                        </EntryHead> 

                        <EntryBody
                            dangerouslySetInnerHTML={{__html: dangerouslySet}}
                        >
                        </EntryBody>

                        { children }
                    </SectionEntry>
                </div>
            </div>
        )
    }

    return (
        <div className={`section ${padding} ${props.className}`}>
            <div className='container'>
                { (title || description) &&
                    <SectionEntry>
                        <EntryHead>
                            { title }
                        </EntryHead>

                        <EntryBody>
                            { description }
                        </EntryBody>
                    </SectionEntry>
                }

                { children }
            </div>
        </div>
    )
}

Section.defaultProps = {
    padding: 'py-14 lg:py-36'
}

export default Section;
