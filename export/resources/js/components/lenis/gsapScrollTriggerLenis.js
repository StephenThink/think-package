import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger from GSAP

// https://github.com/studio-freight/lenis

const gsapScrollTrigger = (debug = false) => {
    const lenis = new Lenis();

    if (debug) {
        lenis.on('scroll', (e) => {
            console.log(e);
        });
    }

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0)

    // You might need to return Lenis instance or other values if required
    return lenis;
};

export default gsapScrollTrigger;
