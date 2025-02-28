import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const columns = (markers = false) => {


// Map through the NodeList to get parent elements
    const leftColumnElements = Array.from(document.querySelector('.left-column-component')?.children || []);
    const rightColumnElements = Array.from(document.querySelector('.right-column-component')?.children || []);
    const columnElements = leftColumnElements.concat(rightColumnElements);

    console.log(leftColumnElements, rightColumnElements, columnElements);

    // Ensure Call to actions exist
    if (!columnElements.length) {
        console.warn("No Column's found for animations");
        return;
    }

    //  Get all ids from the columns
    leftColumnElements.forEach(element => {

        const tl = gsap.timeline({
            defaults: { opacity: 0, ease: "power3.out", duration: 1.2 },
            scrollTrigger: {
                trigger: element, // Use the first image as a trigger reference
                start: "top 50%",
                end: "bottom 20%",
                toggleActions: "play none none none",
                markers: markers,
                clearProps: true
            }
        });

        // Animate all images in sequence with stagger
        tl.from(element, {
            x: -200,
            stagger: 0.3, // Delays each image animation
        });
    })

    //  Get all ids from the columns
    rightColumnElements.forEach(element => {

        const tl = gsap.timeline({
            defaults: { opacity: 0, ease: "power3.out", duration: 1.2 },
            scrollTrigger: {
                trigger: element, // Use the first image as a trigger reference
                start: "top 50%",
                end: "bottom 20%",
                toggleActions: "play none none none",
                markers: markers,
                clearProps: true
            }
        });

        // Animate all images in sequence with stagger
        tl.from(element, {
            x: 200,
            stagger: 0.3, // Delays each image animation
        });
    })

    // // Get all ids from the columns
    // columnElements.forEach(element => {
    //
    //     const tl = gsap.timeline({
    //         defaults: { opacity: 0, ease: "power3.out", duration: 1.2 },
    //         scrollTrigger: {
    //             trigger: element, // Use the first image as a trigger reference
    //             start: "top 50%",
    //             end: "bottom 20%",
    //             toggleActions: "play none none none",
    //             markers: markers,
    //             clearProps: true
    //         }
    //     });
    //
    //     // Animate all images in sequence with stagger
    //     tl.from(element, {
    //         x: -200,
    //         stagger: 0.3, // Delays each image animation
    //     });
    // })

        // element.forEach((el, index) => {
        //     gsap.fromTo(el, {
        //         opacity: 0.2,
        //         y: 20, // Optional: Adds slight movement
        //     }, {
        //         opacity: 1,
        //         y: 0,
        //         ease: "power2.out",
        //         duration: 0.6,
        //         scrollTrigger: {
        //             trigger: el,
        //             start: "top 50%",
        //             end: "bottom 50%",
        //             toggleActions: "play none none none",
        //             markers: markers, // Remove in production
        //             clearProps: true
        //         }
        //     });
        // });








// Force ScrollTrigger to refresh and recalculate positions
//     ScrollTrigger.refresh(); // Ensures triggers work immediately on load


}


export default columns;
