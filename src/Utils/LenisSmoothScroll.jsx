import Lenis from "lenis";
import React from "react";

const LenisSmoothScroll = () => {
    // Initialize Lenis
    const lenis = new Lenis({
        duration: 0.4,
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return null;
};

export default LenisSmoothScroll;
