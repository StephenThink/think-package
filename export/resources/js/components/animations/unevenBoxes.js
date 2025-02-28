import gsap from "gsap";

const unevenBoxes = (marker) => {
    // Get the team list element and its boxes
    const unevenBoxes = document.querySelectorAll('#unevenStackSection');

    // Ensure Uneven Boxes exist
    if (!unevenBoxes.length) {
        if(marker) {

            console.warn("No Uneven Boxes found for animations");
        }
        return;
    }

    const boxes = unevenBoxes.querySelectorAll('#unevenStackBox');

    if(!boxes.length) return;

    // Iterate over each team box
    boxes.forEach((box, index) => {
        // Get the elements inside each box
        const icon = box.querySelector('#unEvenStackBoxIcon');
        const title = box.querySelector('#unEvenStackBoxTitle');
        const content = box.querySelector('#unEvenStackBoxContent');

        // Create a timeline for animations
        const tl = gsap.timeline({
            // Set ScrollTrigger for each box
            scrollTrigger: {
                trigger: box, // Set trigger element
                start: "top 70%", // Adjust start position as needed
                end: "bottom 20%", // Adjust end position as needed
                toggleActions: "play none none none", // Set toggle actions
                markers: marker // Show markers for debugging if true
            }
        });

        tl.fromTo(
            box,
            {
                y: 300,
                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)", // No shadow initially
            },
            {
                y: 0,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)", // Soft shadow
                duration: 0.8,
                ease: "power2.out",
                delay: index * 0.5,
                clearProps: "all"
            }
        );


        // Animate icon
        if (icon) {
            // Get the dimensions of the image
            const iconWidth = icon.offsetWidth;
            const iconHeight = icon.offsetHeight;
            const centerX = iconWidth / 2;
            const centerY = iconHeight / 2;

            // Animate icon scaling
            tl.fromTo(
                icon,
                {
                    scale: 0, // Start with no scale
                    transformOrigin: "center center" // Set transform origin
                },
                {
                    scale: 1, // Scale to 100%
                    transformOrigin: "center center", // Set transform origin
                    duration: 2, // Animation duration
                    ease: "back.out(1.7)", // Easing function
                    clearProps: "all" // Clear properties after animation
                }
            );
        }

        // Animate title
        if (title) {
            tl.from(
                title,
                {
                    autoAlpha: 0, // Start with opacity 0
                    opacity: 0,
                    y: 10, // Move vertically by 10px
                    ease: "back.out(1.7)", // Easing function
                    duration: .5, // Animation duration
                    clearProps: "all" // Clear properties after animation
                },
                "< 1" // Animation relative starting point
            );
        }



        // Animate social links
        if (content) {
            tl.from(
                content,
                {
                    autoAlpha: 0, // Start with opacity 0
                    opacity: 0,
                    y: 10, // Move vertically by 10px
                    ease: "back.out(1.7)", // Easing function
                    duration: .5, // Animation duration
                    clearProps: "all" // Clear properties after animation
                },
                "< 1" // Animation relative starting point
            );
        }
    });
};



export default unevenBoxes;
