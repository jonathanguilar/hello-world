import { useEffect, useState, useMemo, useRef } from 'react';

export default function usePerspective() {
    const ref = useRef();

    const [rect, setRect] = useState(false);

    const observer = useMemo(() => {
        return new IntersectionObserver(([element]) => {
            if (element && element.isIntersecting) {
                setRect(true);
            }
            else {
                setRect(false);
            }
        }, { threshold: 0.5 })
    }, []);

    useEffect(() => {
      if (!ref.current) return;
      
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return [ref, rect];
}