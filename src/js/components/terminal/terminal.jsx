import React from 'react';
import CommandLine from './command-line';

const Terminal = ({ hasCommandLine, children, className }) => {
    return (
        <div className={`terminal-wrapper px-2 lg:px-0 ${className}`}>
            <div className='terminal
                bg-white 
                rounded-3xl
                w-full
                text-xs
                sm:text-base
                overflow-hidden
                h-96
                lg:h-160
            '
            >
                <div className='decoration
                    h-16
                    p-6
                    border-b-2
                    border-grey
                    flex
                    items-center
                '
                >
                    <ul className="controls
                        flex
                        items-center
                        justify-between
                        w-20
                        px-1
                    "
                    >
                        <li>
                            <button className='
                                bg-terminal-close
                                rounded-full
                                p-2
                                flex
                                items-center
                            '
                            >
                            </button>
                        </li>
                        
                        <li>
                            <button className='
                                bg-terminal-minimize
                                rounded-full
                                p-2
                                flex
                                items-center
                            '
                            >
                            </button>
                        </li>

                        <li>
                            <button className='
                                bg-terminal-maximize
                                rounded-full
                                p-2
                                flex
                                items-center
                            '
                            >
                            </button>
                        </li>
                    </ul>
                </div>

                <div className='window
                    flex
                    flex-col
                    px-2
                    lg:px-8
                    pt-2
                    pb-10
                    overflow-scroll
                    h-full
                '
                >
                    { hasCommandLine &&
                        <CommandLine cwd='~/octocat-classifier' placeholder='help' />
                    }

                    { children }
                </div>
            </div>
        </div>
    )
}

export default Terminal;
