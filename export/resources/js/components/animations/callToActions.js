import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const callToActions = (markers = false) => {

    const ctas = document.querySelectorAll('#callToAction');

    // Ensure Call to actions exist
    if (!ctas.length && markers) {
        console.warn("No CTA's found for animations");
        return;
    }


    ctas.forEach(cta => {

        const animateType = cta.dataset.animate;
        const content = cta.querySelector('#ctaContent');

        // Split <p> tags inside the content
        const paragraphs = gsap.utils.toArray(content.querySelectorAll('p'));

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cta,
                start: "top 50%",
                end: `bottom 50%`,
                toggleActions: "play none none none",
                markers: markers,
                immediateRender: false // Ensure animation does not pre-render unexpectedly
            }
        })

        tl.fromTo(cta, {
            opacity: 0.2,
        },{
            opacity: 1,
            ease: "power2.in",
            duration: .5,
        })

        tl.fromTo([paragraphs], {
            opacity: 0.2,
            y: 20, // Optional: Adds slight movement

        }, {
            opacity: 1,
            y: 0,
            ease: "power2.in",
            duration: .5,
            stagger: 0.5,
        })


    })



// Force ScrollTrigger to refresh and recalculate positions
    ScrollTrigger.refresh(); // Ensures triggers work immediately on load


}


export default callToActions;
