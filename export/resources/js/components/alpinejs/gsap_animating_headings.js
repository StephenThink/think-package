import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default () => ({


    init() {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.defaults({
            markers: false // Enables debugging markers (remove in production)
        });

        const headings = Array.from(document.getElementsByClassName("header-trigger"));
        // const lines = headings.querySelectorAll("p");
        // console.log(headings, lines);


        headings.forEach(heading => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heading,
                    start: "-15% top",
                    end: "80% top",
                    scrub: 0.8
                }
            });

            tl.to(heading, {
                y: "100%",
                // scale: "2",
                // width: "100%",
                // y: "-190%",
                duration: 1
            });
        })

    }
});
