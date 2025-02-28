import gsap from "gsap";
export default((entry_id, sliderId, container) => {
    return {
        container: container,
        activeSlide: 0,
        images: [],
        image: '',
        alt: '',
        entry_id: entry_id,
        totalSlides: 0,
        firstRun: true,
        sliderId: sliderId,

        nextSlide() {
            this.activeSlide = (this.activeSlide + 1) % this.totalSlides;
            this.updateSlide(this.activeSlide);
        },

        prevSlide() {
            this.activeSlide = (this.activeSlide - 1 + this.totalSlides) % this.totalSlides;
            this.updateSlide(this.activeSlide);
        },

        updateSlide(slide) {
            const element = document.querySelector(`.animated-element-${sliderId}`);

            // Create a GSAP timeline
            const tl = gsap.timeline();

// Function to add enter animation
            function enterAnimation() {
                tl.fromTo(element,
                    {
                        // x: '100%',
                        rotate: '359deg',
                        opacity: 0,
                        duration: 1,
                        ease: 'easeInOut'
                    },
                    {
                        // x:'0%',
                        rotate: '0deg',
                        opacity: 1
                    });
            }

// Function to add leave animation
            function leaveAnimation() {
                tl.fromTo(element, {
                        // x: '0%',
                        rotate: '0deg',

                        opacity: 1
                    },
                    {
                        // x: '-100%',
                        rotate: '-359deg',

                        opacity: 0,
                        duration: .5,
                        ease: 'easeInOut'});

            }


            if (!this.firstRun) {
                // Add leave animation when you want to hide the element
                leaveAnimation();

                tl.call(() => {
                    this.activeSlide = slide;
                    this.image = this.images[slide].url;
                    this.alt = this.images[slide].alt;
                    // Trigger enter animation for the next slide
                    enterAnimation();
                }, null, '-=0.1'); // Add a slight delay before calling the callback to ensure smooth transition


                // tl.to(element, { x: '0%', duration: .5, ease: 'easeInOut'}); // Delay the animation by 1 second

                // Update the firstRun flag after animations
            } else {
                this.activeSlide = slide;
                this.image = this.images[slide].url;
                this.alt = this.images[slide].alt;
                this.firstRun = false;
            }
        },

        init() {
            this.$el.setAttribute('x-ref', sliderId);

            fetch(this.entry_id)
                .then(res => res.json())
                .then(data => {
                    let imageLocation = 0;
                    const sections = data.data[this.container];
                    sections.forEach((item, index) => {
                        if (item.id === this.sliderId) {
                            imageLocation = index;
                        }
                    });
                    const imageArray = sections[imageLocation].slider_images;
                    let finalImageArray = [];
                    let promises = imageArray.map(address => {
                        return fetch(address.api_url)
                            .then(result => result.json())
                            .then(innerData => {
                                finalImageArray.push({
                                    'url': address.url,
                                    'alt': innerData.data.alt ? innerData.data.alt : 'Need Alt'
                                });
                            })
                            .catch(error => {
                                console.error('Error fetching image data:', error);
                            });
                    });


                    // Wait for all promises to resolve before updating imgArray
                    Promise.all(promises).then(() => {
                        // Order finalImageArray based on the original order
                        this.images = imageArray.map(originalImage => {
                            return finalImageArray.find(finalImage => finalImage.url === originalImage.url);
                        });

                        this.updateSlide(0); // Update initial slide after fetching data
                        this.totalSlides = this.images.length;
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });


        },
    };
});
