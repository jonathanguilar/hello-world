import React, { useEffect } from 'react';
import useNav from '../generic/nav/use-nav';
import { NavItem } from '../generic/nav/nav-item';

const styles = {
    default: {
        year: 'bg-grey-alt text-grey-dark',
        bullet: { 
            self: 'bg-grey-alt',
            track: 'bg-section-inverse',
            dots: 'border-grey-alt',
        },
        description: 'text-grey-alt',
        title: 'text-grey-alt',
        version: 'text-grey-alt'
    },
    active: {
        year: 'bg-accent-primary text-white',
        bullet: { 
            self: 'bg-section-inverse border-4 border-accent-primary',
            track: 'bg-section-inverse mt-1',
            dots: 'border-accent-secondary',
        },
        description: 'text-grey-alt',
        title: 'text-accent-primary',
        version: 'text-accent-primary'
    },
    remaining: {
        year: 'bg-accent-secondary text-white',
        bullet: { 
            self: 'bg-section-inverse border-4 border-accent-secondary',
            track: 'bg-section-inverse mt-1',
            dots: 'border-accent-secondary',
        },
        description: 'text-grey-alt',
        title: 'text-accent-secondary',
        version: 'text-accent-secondary'
    },
}

const Milestone = ({ title, version, year, description, itemCount, index, isCurrent, ...props }) => {
    const { activeItem, setActiveItem } = useNav();

    useEffect(() => {
        if (isCurrent !== undefined) {
            setActiveItem(index);
        }
    }, [isCurrent, index, setActiveItem])

    const style = (() => {
        if (index === activeItem) {
            return styles.active;
        }
        else if (index > activeItem && activeItem !== -1) {
            return styles.remaining;
        }
        else {
            return styles.default;
        }
    })();

    return (
        <NavItem className='milestone flex items-center pb-40 pt-4 justify-between'>
            <div className={`year border-transparent rounded-3xl w-20 py-3 px-6 text-lg font-bold flex items-center justify-center z-10 ${style.year}`}>{ year }</div>

            <div className={`bullet -ml-12 sm:ml-0 relative rounded-full w-5 h-5 ${style.bullet.self}`}>
                <div className={`track absolute top-full w-5 h-96 ${style.bullet.track}`}></div>

                { index !== itemCount - 1 &&
                    <div className={`dots absolute top-full mt-1 left-1/2 h-96 bg-transparent border-l-4 border-dotted ${style.bullet.dots}`} style={{marginLeft: '-2px'}}></div>
                }
            </div>

            <div className='description ml-12 sm:ml-0 relative w-4/5'>
                <h4 className={`absolute -top-5 left-0 font-black ${style.version}`}>{ version }</h4>

                <h3 className={`text-2xl capitalize font-black ${style.title}`}>{ title }</h3>

                <p className={`absolute font-black w-full ${style.description}`}>
                    { description }
                </p>
            </div>
        </NavItem>
    )
}

export default Milestone;
