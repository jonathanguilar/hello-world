import { useEffect, useState, useMemo, useRef } from 'react';

export default function useMeasure() {
    const ref = useRef();

    const [rect, setRect] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    });

    const observer = useMemo(() => {
        return new ResizeObserver(([element]) => {
            if (element) {
                // Get the element size including padding and borders
                const [ borderRect ] = element.borderBoxSize;

                // Patch rect to have box-border width and height
                const content = element.contentRect;

                setRect({
                  x: content.x,
                  y: content.y,
                  width: borderRect.inlineSize,
                  height: borderRect.blockSize,
                  top: content.top,
                  left: content.left,
                  bottom: content.bottom,
                  right: content.right,
              });
            }
        })
    }, []);

    useEffect(() => {
      if (!ref.current) return;
      
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref.current]);

    return [ref, rect];
}