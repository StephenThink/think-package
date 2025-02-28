import gsap from "gsap";

export default (items, speed) => {
    return {
        slideIndex: null,
        speed: speed,
        activeSlide: null,
        items: items,
        interval: null,
        images: [],
        isLoaded: false,
        width: null,
        isPaused: false,

        // Move to the next slide
        nextSlide() {

            // Calculate the index of the next slide
            this.slideIndex = (this.slideIndex + 1) % this.items.length;
            // Get the active slide based on the new index
            this.activeSlide = this.items[this.slideIndex];
            // Update the slide
            this.updateSlide();
        },

        // Move to the previous slide
        prevSlide() {

            // Calculate the index of the previous slide, handling wrap-around
            this.slideIndex = (this.slideIndex - 1 + this.items.length) % this.items.length;
            // Get the active slide based on the new index
            this.activeSlide = this.items[this.slideIndex];
            // Update the slide
            this.updateSlide();
        },

        // Jump to a specific slide
        jumpSlide(index) {

            // Set the slide index to the provided index
            this.slideIndex = index;
            // Get the active slide based on the new index
            this.activeSlide = this.items[this.slideIndex];
            // Update the slide
            this.updateSlide();
        },

        // Initialize the slider
        init() {
            // Get the width of the window
            this.getWidth();
            // Get the images from the DOM
            this.getImages();
            // Add the images to the items
            this.addImagesToItems();
            // Set the initial slide index to 0
            this.slideIndex = 0;
            // Get the first active slide
            this.activeSlide = this.items[this.slideIndex];
            // Start the auto slide
            this.startAutoSlide();
            // Set the isLoaded flag to true
            this.isLoaded = true;
        },

        // Get the width of the window and adjust the speed if needed
        getWidth() {
            // Get the current width of the window
            this.width = window.innerWidth;

            // If the width is less than 980, double the speed
            if (this.width < 980) {
                this.speed = speed * 2
            } else {
                // Otherwise, use the provided speed
                this.speed = speed
            }
        },

        // Start the auto slide
        startAutoSlide() {
            // If the slider is not paused
            if (!this.isPaused) {
                // Set an interval to move to the next slide every `this.speed` milliseconds
                this.interval = setInterval(() => {
                    this.nextSlide();
                }, this.speed);
            }
        },

        // Stop the auto slide
        stopAutoSlide() {
            // Clear the interval
            clearInterval(this.interval);
        },

        // Update the slide using GSAP
        updateSlide() {
            // Use GSAP to fade in the active slide
            gsap.fromTo('.animated', {opacity: 0}, {opacity: 1, duration:1});
        },

        // Get the images from the DOM
        getImages() {
            // Get all the .image__slide elements and convert them to an array
            this.images = Array.from(this.$el.querySelectorAll('.image__slide'))
                // Map over each image element
                .map(img => {
                    // Get the src attribute of the image
                    const src = img.src;
                    // Remove the original <img> element
                    img.remove();
                    // Return the src
                    return src;
                });
        },

        // Add the images to the items
        addImagesToItems() {
            // Map over each item and add the corresponding image
            this.items = this.items.map((item, index) => ({
                ...item,
                glideImage: this.images[index],
            }));
        },

        // Pause the auto slide
        pauseAutoSlide() {
            // Set the isPaused flag to true
            this.isPaused = true;
            // Stop the auto slide
            this.stopAutoSlide();
        },

        // Play the auto slide
        playAutoSlide() {
            // Set the isPaused flag to false
            this.isPaused = false;
            // Start the auto slide
            this.startAutoSlide();
        },
    };
};
