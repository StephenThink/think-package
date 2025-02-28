// Import GSAP library and ScrollTrigger
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Define footer animation function
const footer = (marker) => {
    // Select footer elements
    const footer = document.querySelector('footer');

    // Check if footer exists
    if (footer) {
        // Define animations for individual footer elements
        const animations = [
            { selector: '#footerHeading', props: { x: -50, skewX: 50 }, delay: 0 },
            { selector: '#footerContent', props: { y: 10 }, delay: 1 },
            { selector: '#siteAdmin', props: { y: 10 }, delay: 2.5 },
            {selector: '#cookieButton', props: { x: -100 }, delay: 3 }
        ];

        // Loop through animations and create timelines
        animations.forEach(animation => {
            const element = footer.querySelector(animation.selector);
            if (element) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: footer,
                        start: "top 85%",
                        end: "bottom 90%",
                        toggleActions: "play none none none",
                        markers: marker
                    }
                });

                tl.from(element, {
                    autoAlpha: 0,
                    opacity: 0,
                    ease: 'back.out(1.7)',
                    duration: .5,
                    stagger: 0.5,
                    delay: animation.delay,
                    ...animation.props,
                    clearProps: "all"
                });
            }
        });

        // Select footer menu items
        const menuItems = footer.querySelectorAll('#footerMenu');

        // Loop through menu items and create timelines
        menuItems.forEach(item => {
            const menuTitle = item.querySelector('#footerMenuTitle');
            const menuLinks = item.querySelectorAll('ul');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    end: "bottom 90%",
                    toggleActions: "play none none none",
                    markers: marker
                }
            });

            if (menuTitle) {
                tl.from(menuTitle, {
                    autoAlpha: 0,
                    opacity: 0,
                    x: -50,
                    skewX: 50,
                    ease: 'back.out(3)',
                    duration: .5,
                    delay: 1,
                });
            }
            if (menuLinks) {
                tl.from(menuLinks, {
                    autoAlpha: 0,
                    opacity: 0,
                    y: 10,
                    ease: "back.out(1.7)",
                    duration: .5,
                    stagger: .5,
                    delay: .5,
                });
            }
        });
    }
};

// Export footer animation function
export default footer;
