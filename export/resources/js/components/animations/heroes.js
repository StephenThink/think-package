import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const heroes = (markers = false) => {

    const heroes = document.querySelectorAll('#hero');

    // Ensure heroes exist
    if (!heroes.length) {
        if(markers) {

            console.warn("No heroes found for animations");
        }
        return;
    }


    heroes.forEach(hero => {


        const heroAnimateType = hero.dataset.animate;
        const heroHeader = hero.querySelector('#hero_heading');
        const heroSubHeader = hero.querySelector('#hero_sub_heading');
        const heroImg = hero.querySelector('img');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: hero,
                start: "top 25%",
                end: `bottom 50%`,
                toggleActions: "play none none none",
                markers: markers,
                immediateRender: false // Ensure animation does not pre-render unexpectedly
            }
        })

        tl.fromTo(heroImg, {
            opacity: 0.2,
        },{
            opacity: 1,
            ease: "power2.in",
            duration: 1,
        })

        tl.fromTo([ heroHeader, heroSubHeader], {
            opacity: 0
        }, {
            opacity: 1,
            ease: "power2.in",
            duration: 1,
            stagger: 0.5,
        })


    })



// Force ScrollTrigger to refresh and recalculate positions
    ScrollTrigger.refresh(); // Ensures triggers work immediately on load


}


export default heroes;
