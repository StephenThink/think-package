import gsap from "gsap";

export default () => ({
    isNavBarOpen: false,
    openNav() {
        this.isNavBarOpen = true;
        document.body.classList.add('disable-scroll');
    },
    closeNav() {
        this.isNavBarOpen = false;
        document.body.classList.remove('disable-scroll');
    },
    toggleNav() {
        this.isNavBarOpen = !this.isNavBarOpen;
        if (this.isNavBarOpen) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }
    },
    handleScroll() {
        let currentScroll = window.pageYOffset;

        if (currentScroll > this.lastScroll + 10) {
            // User is scrolling down
            if (!this.scrollingDown) {
                this.scrollingDown = true;
                this.showNav = false;

                if(this.isNavBarOpen)
                {
                    this.isNavBarOpen = false;
                }

                gsap.to("#mainNav", { y: "-100%", duration: 0.4, ease: "power1.in" });
            }
        } else if (currentScroll < this.lastScroll - 10) {
            // User is scrolling up
            if (this.scrollingDown) {
                this.scrollingDown = false;
                this.showNav = true;
                gsap.to("#mainNav", { y: "0", duration: 0.4, ease: "power1.out" });
            }
        }

        this.lastScroll = currentScroll;
    },

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('close-nav', () => this.closeNav());
        this.isNavBarOpen = false;

        // Mobile navigation GSAP animation
        // this.$watch('isNavBarOpen', (value) => {
        //     const mobileNav = document.getElementById('mobileNav');
        //
        //     if (value) {
        //         // Animate mobile nav opening
        //         gsap.fromTo(mobileNav, { y: -100, zIndex: 99 }, { duration: 0.5, y: 0, zIndex: 99, ease: "power1.out" });
        //     } else {
        //         // Animate mobile nav closing
        //         gsap.fromTo(mobileNav, { y: 0,zIndex: 99 }, { duration: 0.5, y: "-100%", zIndex: 99, ease: "power1.in" });
        //     }
        // });

        // this.$watch('isNavBarOpen', (value) => {
        //     const mobileNav = document.getElementById('mobileNav');
        //
        //     if (value) {
        //         // Animate mobile nav opening (slide and fade in)
        //         gsap.fromTo(mobileNav,
        //             { y: -50, opacity: 0, zIndex: 99 },
        //             { duration: 0.5, y: 0, opacity: 1, zIndex: 99, ease: "power2.out" }
        //         );
        //     } else {
        //         // Animate mobile nav closing (slide and fade out)
        //         gsap.to(mobileNav,
        //             { duration: 0.4, y: -50, opacity: 0, ease: "power2.in" }
        //         );
        //     }
        // });

        this.$watch('isNavBarOpen', (value) => {
            const mobileNav = document.getElementById('mobileNav');

            if (value) {
                // Animate mobile nav opening (rotate in)
                gsap.fromTo(mobileNav,
                    { rotationX: -90, opacity: 0, transformOrigin: "top", zIndex: 99 },
                    { duration: 0.6, rotationX: 0, opacity: 1, zIndex: 99, ease: "power2.out" }
                );
            } else {
                // Animate mobile nav closing (rotate out)
                gsap.to(mobileNav,
                    { duration: 0.5, rotationX: -90, opacity: 0, ease: "power2.in" }
                );
            }
        });

    },
});
