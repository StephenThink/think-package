import Lenis from "lenis";

// https://github.com/studio-freight/lenis

const smoothScroll = (debug = false) => {



const lenis = new Lenis()

if(debug) {
    lenis.on('scroll', (e) => {
        console.log(e)
    })
}

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
}

export default smoothScroll;
