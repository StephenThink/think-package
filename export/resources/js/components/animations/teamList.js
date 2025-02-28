import gsap from "gsap";

const teamList = (marker) => {
    // Get the team list element and its members
    const teamList = document.querySelectorAll('#teamList');


    // Ensure Team List exist
    if (!teamList.length) {
        if(marker) {
        console.warn("No Team List's found for animations");
        }
        return;
    }

    const members = teamList.querySelectorAll('#teamMember');

    if (!members.length) return;

    // Iterate over each team member
    members.forEach((member, index) => {
        // Get the elements inside each member
        const mugshot = member.querySelector('img');
        const name = member.querySelector('#teamMemberName');
        const position = member.querySelector('#teamMemberPosition');
        const socials = member.querySelector('#teamMemberSocialLinks');

        // Create a timeline for animations
        const tl = gsap.timeline({
            // Set ScrollTrigger for each member
            scrollTrigger: {
                trigger: member, // Set trigger element
                start: "top 50%", // Adjust start position as needed
                end: "bottom 20%", // Adjust end position as needed
                toggleActions: "play none none none", // Set toggle actions
                markers: marker // Show markers for debugging if true
            }
        });

        // Animate mugshot
        if (mugshot) {
            // Get the dimensions of the image
            const mugshotWidth = mugshot.offsetWidth;
            const mugshotHeight = mugshot.offsetHeight;
            const centerX = mugshotWidth / 2;
            const centerY = mugshotHeight / 2;

            // Animate mugshot scaling
            tl.fromTo(
                mugshot,
                {
                    scale: 0, // Start with no scale
                    transformOrigin: "center center" // Set transform origin
                },
                {
                    scale: 1, // Scale to 100%
                    transformOrigin: "center center", // Set transform origin
                    duration: 3, // Animation duration
                    ease: "back.out(1.7)", // Easing function
                    clearProps: "all" // Clear properties after animation
                }
            );
        }

        // Animate name
        if (name) {
            tl.from(
                name,
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

        // Animate position
        if (position) {
            tl.from(
                position,
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
        if (socials) {
            tl.from(
                socials,
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


export default teamList;
