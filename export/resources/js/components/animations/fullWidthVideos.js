import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const fullWidthVideos = (marker = false) => {
    // Select all elements with the class 'fullImage'
    const videos = document.querySelectorAll('.fullVideo');

    if (!videos.length) return;

    videos.forEach(video => {

        // Create a timeline for all videos together
        const tl = gsap.timeline({
            defaults: {opacity: 0, ease: "power3.out", duration: 1.2},
            scrollTrigger: {
                trigger: video, // Use the first image as a trigger reference
                start: "top 50%",
                end: "bottom 20%",
                toggleActions: "play none none none",
                markers: marker,
            }
        });

        // Animate all videos in sequence with stagger
        tl.from(video, {
            x: 200,
            stagger: 0.3, // Delays each image animation
        });
    })
};

export default fullWidthVideos;
