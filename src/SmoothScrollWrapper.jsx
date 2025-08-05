import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';  // For Hiding Scroll bar 

function SmoothScrollWrapper({ children }) {
    const scrollRef = useRef(null);
    const locoRef = useRef(null);

    useEffect(() => {
        
        locoRef.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.06,
        
    });

    window.addEventListener('load', () => locoRef.current.update());

    return () => {
        locoRef.current?.destroy();
        locoRef.current = null;
    };
}, []);

    return (
        <div data-scroll-container ref={scrollRef}>
            {children}
        </div>
    );
}

export default SmoothScrollWrapper;
