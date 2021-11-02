import React, { useRef, useEffect, useLayoutEffect, Children } from 'react';

export const Skew = {
    TOP_LEFT:       { x: 129, y: 146 },
    TOP_RIGHT:      { x: 510, y: 107 },
    BOTTOM_RIGHT:   { x: 500, y: 422},
    BOTTOM_LEFT:    { x: 105, y: 420 }
}

const Bg3D = ({ children, skew, className, ...props }) => {
    const ref = useRef();
    
    const handleMouseMove = (event) => {
        const x = event.pageX - event.currentTarget.offsetLeft;
        const y = event.pageY - event.currentTarget.offsetTop;

        ref.current.style.setProperty('--mouse-x', x + 'deg');
        ref.current.style.setProperty('--mouse-y', y + 'deg');
    }

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('mousemove', handleMouseMove);
        }
    }, [ref])

    useLayoutEffect(() => {
        if (ref.current && skew) {
            ref.current.style.setProperty('--mouse-x', skew.x + 'deg');
            ref.current.style.setProperty('--mouse-y', skew.y + 'deg');
        }
    }, [ref, skew])

    return (
        <div { ...props } className={`image-3d-wrapper ${className}`}>
            <div ref={ref} className='image-3d p-10 sm:p-20'>
                {
                    Children.map(children, (child, key) => {
                        const props = child.props;
                        const classes = props.className;
                        const className = `${classes ? classes : ''} relative z-20`;

                        return React.cloneElement(child,
                            { ...child.props, key, className }
                        )
                    })
                }

                <div className="background bg-section-alt dark:bg-section-alt z-10"></div>
            </div>
        </div>
    )
}

Bg3D.defaultProps = {
    skew: Skew.BOTTOM_RIGHT,
    className: ''
}

export default Bg3D;
