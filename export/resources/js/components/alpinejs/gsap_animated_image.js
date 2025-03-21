import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default () => ({


    init() {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.defaults({
            markers: false // Enables debugging markers (remove in production)
        });

        const wrappers = Array.from(document.getElementsByClassName("sticky-circle__wrapper"));
        // const lines = headings.querySelectorAll("p");
        // console.log(headings, lines);


        wrappers.forEach(wrapper => {
            const circle = wrapper.querySelector('.sticky-circle');
            const image = wrapper.querySelector("img");
            const text = wrapper.querySelector(".appearing-text");

            // Animate Circle Growth
            gsap.fromTo(circle,
                { width: "20rem", height: "20rem", borderRadius: "100%" },
                { width: "100dvw", height: "100dvh", borderRadius: "0rem", duration: 2,
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top top",
                        end: "50% bottom",
                        scrub: 0.8,
                    }
                }
            );

            // Animate Text Appearance Separately
            gsap.fromTo(text,
                { opacity: 0 },
                { opacity: 1, color: "white", duration: 2, delay: 0.5,
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "40% center", // Adjust start position
                        end: "50% center", // Keeps it longer

                        scrub: true
                    }
                }
            );

            // Animate Image Opacity
            gsap.to(image,
                { opacity: 0.7, duration: 1,
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "40% center",
                        end: "50% center",
                        scrub: true
                    }
                }
            );

        })

    }
});
