import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const gallery = (marker = false) => {
    // Select all elements with the class 'fullImage'
    const gallery = document.querySelectorAll('.masonry-wrapper');
    const images = document.querySelectorAll('.masonry-item');

    if (!images.length) return;

    // Create a timeline for all images together
    const tl = gsap.timeline({
        defaults: {ease: "power3.out", duration: 1},
        scrollTrigger: {
            trigger: gallery, // Use the first image as a trigger reference
            start: "top 70%",
            end: "bottom 10%",
            toggleActions: "play none none none",
            markers: marker,
        }
    });

    images.forEach(image => {
        // Animate all images in sequence with stagger
        tl.from(image, {
            // scale: 0.5,
            rotateY: 90,
            opacity: 0,
            stagger: 0.5, // Delays each image animation
        });
    })
};

export default gallery;
