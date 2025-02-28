import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const fullWidthImages = (marker = false) => {
    // Select all elements with the class 'fullImage'
    const images = document.querySelectorAll('.fullImage');

    if (!images.length) return;


    images.forEach(image => {


    // Create a timeline for all images together
    const tl = gsap.timeline({
        defaults: { opacity: 0, ease: "power3.out", duration: 1.2 },
        scrollTrigger: {
            trigger: image, // Use the first image as a trigger reference
            start: "top 50%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            markers: marker,
        }
    });

    // Animate all images in sequence with stagger
    tl.from(image, {
        x: -200,
        stagger: 0.3, // Delays each image animation
    });
    })
};

export default fullWidthImages;
