import gsap from "gsap";

const bento = (marker) => {
    // Get the team list element and its members
    const bentos = document.querySelectorAll('.bento-grid');

    // Ensure Stacked Boxes exist
    if (!bentos.length) {
        if(marker) {

            console.warn("No Bento Boxes found for animations");
        }
        return;
    }

    // Iterate over each Bento Grid
    bentos.forEach(bento => {
        const cells = bento.querySelectorAll('.bento-cell');

        // Create a timeline for all cells
        cells.forEach(cell => {
            const cellTl = gsap.timeline({
                scrollTrigger: {
                    trigger: cell, // Set trigger element
                    start: "top 50%", // Adjust start position as needed
                    end: "bottom 20%", // Adjust end position as needed
                    toggleActions: "play none none none", // Set toggle actions
                    markers: marker // Show markers for debugging if true
                }
            });

            // Animate the cell first
            cellTl.from(cell, {
                autoAlpha: 0, // Start with opacity 0
                scale: 0.5, // Scale up effect
                ease: "power1.inOut(1.7)", // Easing function
                duration: 0.5, // Animation duration
                clearProps: "all" // Clear properties after animation
            });

            // Select image inside the cell
            const image = cell.querySelector("img");
            if (image) {
                // Animate the image separately
                // cellTl.from(image, {
                //
                //     scale: 5, // Slight zoom-in effect
                //     ease: "power2.out",
                //     duration: 1
                // }, "+=0.4"); // Delay after cell animation

                // cellTl.from(image, {
                //     opacity: 0,
                //     scale: 0.8, // Subtle zoom-in effect
                //     ease: "power2.out",
                //     duration: 1
                // }, "+=0.4"); // Delay after cell animation
                // cellTl.from(image, {
                //     opacity: 0,
                //     y: 30, // Moves up subtly
                //     ease: "power2.out",
                //     duration: 1
                // }, "+=0.4");

                // cellTl.from(image, {
                //     opacity: 0,
                //     rotate: 5, // Slight rotation effect
                //     ease: "power2.out",
                //     duration: 1
                // }, "+=0.4");

                cellTl.from(image, {
                    opacity: 0,
                    filter: "blur(10px)", // Starts blurry
                    ease: "power2.out",
                    duration: 1
                }, "+=0.4");

                // cellTl.from(image, {
                //     opacity: 0,
                //     y: 50, // Starts lower
                //     scale: 1.1, // Slightly larger at start
                //     ease: "power2.out",
                //     duration: 1
                // }, "+=0.4");
            }

            // Select all other children except images
            const otherChildren = cell.querySelectorAll(":not(img)");
            if (otherChildren.length) {
                // Animate the remaining children separately
                cellTl.from(otherChildren, {
                    opacity: 0,
                    filter: "blur(10px)", // Starts blurry
                    ease: "power2.out",
                    duration: 1,
                    stagger: 0.5,
                    clearProps: "all"
                }, "-=0.3"); // Slight overlap with image animation
            }
        });
    });

};


export default bento;
