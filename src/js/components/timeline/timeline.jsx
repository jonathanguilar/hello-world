import React from 'react';
import Milestone from './milestone';
import { NavProvider } from '../generic/nav/use-nav';
import Nav from '../generic/nav/nav';

const Timeline = ({ milestones, children }) => {
    if (milestones !== undefined) {
        return (
            milestones.map((stone, key) => (
                <Milestone
                    key={key}
                    title={stone.title}
                    year={stone.year}
                    version={stone.version}
                    description={stone.description}
                />
            ))
        )
    }

    return (
        <NavProvider defaultItem={-1}>
            <Nav className='timeline px-2 sm:px-8 lg:px-48 relative pt-12 pb-0 lg:py-32 overflow-hidden'>
                { children }
            </Nav>
        </NavProvider>
    )
}

export default Timeline;
