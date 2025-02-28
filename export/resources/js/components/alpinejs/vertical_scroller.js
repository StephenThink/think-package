export default (items, speed = 5000) => {
    return {
        items: items,
        index: null,
        activeItem: null,
        prevItem: null,
        speed: speed,
        interval: null,
        isPaused: false,


        // Initialize the slider
        init() {
            this.index = 0;

            // Get the first active slide
            this.activeItem = this.index;
            this.prevItem = this.items.length - 1;
            // Start the auto slide
            this.startAutoSlide();
            // Set the isLoaded flag to true
            this.isLoaded = true;
        },
        nextItem() {
            this.index = (this.index + 1) % this.items.length;
            this.prevItem = this.activeItem;
            this.activeItem = this.index;
        },
        // Start the auto slide
        startAutoSlide() {
            // If the slider is not paused
            if (!this.isPaused) {
                // Set an interval to move to the next slide every `this.speed` milliseconds
                this.interval = setInterval(() => {
                    this.nextItem();
                }, this.speed);
            }
        },
        // Stop the auto slide
        stopAutoSlide() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        },
        // Pause auto-slide when the mouse enters
        pauseAutoSlide() {
            this.isPaused = true;
            this.stopAutoSlide();
        },
        // Resume auto-slide when the mouse leaves
        resumeAutoSlide() {
            this.isPaused = false;
            this.startAutoSlide();
        },
    //  For people wanting to pause on touch devices
        touchSlide() {
            if(!this.isPaused) {
                this.pauseAutoSlide();
            } else {
                this.resumeAutoSlide();
            }
        }
    };
};
