import gsap from "gsap";

const popularGrid = (marker) => {
    // Get all elements with class .popular-grid
    const popGrids = document.querySelectorAll(".popular-grid");

    // Ensure Stacked Boxes exist
    if (!popGrids.length) {
        if (marker) {
            console.warn("No Popular Grids found for animations");
        }
        return;
    }

    // Iterate over each Popular Grid
    popGrids.forEach((popular) => {
        const popularCells = Array.from(popular.querySelectorAll(".is-popular"));
        const notPopularCells = Array.from(popular.querySelectorAll(".not-popular"));

        // Create GSAP timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: popular, // Set trigger element
                start: "top 70%", // Adjust start position
                end: "bottom 20%", // Adjust end position
                toggleActions: "play none none none", // Play animation only once
                markers: marker, // Show markers for debugging if true
            },
        });

        // Animate "not-popular" cells first with fade-in and slide-up effect
        tl.from(notPopularCells, {
            autoAlpha: 0,
            y: 40,
            scale: 0.9,
            ease: "power2.out",
            duration: 0.6,
            stagger: 0.2, // Stagger each cell animation
            clearProps: "all",
        });

        // Animate "is-popular" cells with scale-up effect after "not-popular"
        tl.from(popularCells, {
            autoAlpha: 0,
            y: 20,
            scale: 1.1,
            opacity: 0.8,
            ease: "power2.out",
            duration: 0.7,
            stagger: 0.3,
            clearProps: "all",
        });

        // Stagger content inside each cell for smooth appearance
        popularCells.concat(notPopularCells).forEach((cell) => {
            const title = cell.querySelector("h3");
            const content = cell.querySelector(".popContent");
            const button = cell.querySelector("div > .button");

            tl.from([title, content, button], {
                autoAlpha: 0,
                y: 10,
                opacity: 0,
                ease: "power2.out",
                duration: 0.4,
                stagger: 0.1,
                clearProps: "all",
            });
        });
    });
};

export default popularGrid;
