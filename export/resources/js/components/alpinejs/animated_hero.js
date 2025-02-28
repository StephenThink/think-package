import gsap from "gsap";

export default (speed = 5000, delay = 5000) => {
    return {
        images: [],
        currentIndex: 0,
        speed: speed + delay, // Total duration (animation + delay)
        delay: delay,
        duration: 2, // Animation duration is fixed to 1 second
        animation: null,

        init() {
            this.animation = this.$el.getAttribute('data-animate') || 'fadeIn';
            this.getImages();
            this.startAnimation();
        },

        getImages() {
            this.images = this.$el.querySelectorAll('.animated-hero img');
        },

        startAnimation() {
            if (this.images.length === 0) return;

            // Make all images invisible at the start
            this.images.forEach((img) => gsap.set(img, { opacity: 0 }));

            // Show the first image instantly (no transition)
            gsap.set(this.images[0], { opacity: 1 });

            const animateNext = () => {
                let current = this.images[this.currentIndex];
                let nextIndex = (this.currentIndex + 1) % this.images.length;
                let next = this.images[nextIndex];

                // Hide current image with no transition
                gsap.set(current, { opacity: 0 });

                // Define the animation properties
                let toAnimation = { opacity: 1, duration: this.duration };
                let fromAnimation = { opacity: 0.5, scale: 1 };

                if (this.animation === "scale") {
                    toAnimation.scale = 1.2;
                    toAnimation.ease = "power2.out";
                } else if (this.animation === "fadeIn") {
                    toAnimation.opacity = 1;
                    toAnimation.ease = "power2.out";
                }

                console.log(this.currentIndex);
                // Animate the next image
                gsap.fromTo(next, fromAnimation , toAnimation);

                this.currentIndex = nextIndex;
                setTimeout(animateNext, this.speed); // Wait before starting the next animation
            };

            // Start the slideshow after the first image delay
            setTimeout(animateNext, this.speed);
        }
    };
};
