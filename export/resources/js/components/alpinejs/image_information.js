import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default () => ({


    init() {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.defaults({
            markers: false // Enables debugging markers (remove in production)
        });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.trigger,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });

            tl.from(this.$refs.content, {
                // height: "100%",
                // scale: "2",
                width: "100%",
                y: "-190%",
                duration: 1
            });


        // Optional: Uncomment and adapt the sections below if you want to add more animations

        // Animate From To
        /*
        triggerElements.forEach(trigger => {
            const targetElement = document.querySelector(self.targetClass);

            if (!targetElement) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: trigger,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });

            tl.fromTo(targetElement,
                { width: "50%" },
                { width: "100%", duration: 1 }
            );
        });
        */

        // Grid Title Change
        /*
        const gridTextItems = document.querySelectorAll('.grid_text-item');
        const gridWrappers = document.querySelectorAll('.grid_wrapper');

        if (gridTextItems.length > 0) {
            gridTextItems[0].classList.add('is--active');
        }

        gridWrappers.forEach((triggerElement, index) => {
            const targetElement = gridTextItems[index];

            if (!targetElement) return;

            gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top bottom",
                    end: "bottom bottom",
                    onEnter: () => {
                        gridTextItems.forEach(el => el.classList.remove("is--active"));
                        targetElement.classList.add("is--active");
                    },
                    onEnterBack: () => {
                        gridTextItems.forEach(el => el.classList.remove("is--active"));
                        targetElement.classList.add("is--active");
                    }
                }
            });
        });
        */
    }
});
