import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import usePerspective from '../../hooks/use-perspective';

const Code = ({ speed, code, language }) => {
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
            }, speed);
        } else {
            Prism.highlightAll();
        }
    }, [code, speed, writtenCode, isVisible]);

    return (
        <div ref={ref} className='code flex align-top line-numbers'>
            <pre className='m-0 line-numbers' data-start='1'>
                <code className={`language-${language}`}>{ writtenCode }</code>
            </pre>
        </div>
    )
}

export default Code;
