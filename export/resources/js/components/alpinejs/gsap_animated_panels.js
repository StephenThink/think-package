import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default (type = 'vertical') => ({

    container: null,

    init() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.defaults({ease: "none", duration: 2, delay: 2});

        // const tl = gsap.timeline();
        // tl.from(".image-1", {opacity: .5})
        //     .from(".image-2", {xPercent: -100})
        //     .from(".image-3", {xPercent: 100})
        //     .from(".image-4", {yPercent: -100})

        this.container = this.$refs.panelContainer;


        ScrollTrigger.defaults({
            markers: true // Enables debugging markers (remove in production)
        });

        if (type === 'vertical') {
            this.vertical();
        }

        if (type === 'horizontal') {
            this.horizontal();
        }


    },

    vertical() {
        return gsap.utils.toArray(".panel-image").forEach((panel, i) => {
            ScrollTrigger.create({
                // animation: tl,
                // trigger: panelContainer,
                trigger: panel,
                start: "top top",
                // end: "+=4000",
                // scrub: true,
                pin: true,
                pinSpacing: false,
                // anticipatePin: 1
            })
        });
    },

    horizontal() {
        let panels = gsap.utils.toArray(".panel-image")

        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: this.container,
                pin: true,
                scrub: 1,
                snap: 1 / (panels.length - 1),
                end: ()=> "+=" + this.container.offsetWidth,
            }
        })

    }


});
