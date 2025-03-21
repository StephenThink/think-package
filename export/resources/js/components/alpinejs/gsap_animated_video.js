import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default () => ({
    videoSrc: '',
    video: null,

    init() {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.defaults({
            markers: false // Enables debugging markers (remove in production)
        });

        this.setup();
    },


    setup() {
        this.video = document.querySelector(".animated-video");
        this.videoSrc = this.video.currentSrc || this.video.src;
        // console.log(this.video, this.videoSrc);

        // this.ensureIOSActivation();
        this.setupGSAP();
        this.preloadVideo();
    },

    ensureIOSActivation() {
        const once = (el, event, fn, opts) => {
            const onceFn = function (e) {
                el.removeEventListener(event, onceFn);
                fn.apply(this, arguments);
            };
            el.addEventListener(event, onceFn, opts);
        };

        once(document.documentElement, "touchstart", () => {
            this.video.play();
            this.video.pause();
        });
    },

    setupGSAP() {
        const trigger = document.querySelector(".video-container");

        let videoScroll = document.querySelector(".video-container"),
            frameNumber = 0,
            src = videoScroll.currentSrc || videoScroll.src

        let tl = gsap.timeline({
            // defaults: { duration: 1 },
            scrollTrigger: {
                trigger: trigger, // Ensure it's targeting the right element
                start: "top top",
                end: "bottom +=100%", // Extended to 500dvh
                id: 'animated-video',
                // pin: true,
                // pinSpacing: false,
                scrub: true,
                onUpdate: self => {
                    frameNumber = self.progress / 14 * 100 - 1; //this takes fine tuning divide your videos FPS by two. My video's FPS was 30, 14 was the sweet spot. -1 fixes an issue on safari where the video disappears at the end of the scrollTrigger
                    videoScroll.currentTime = frameNumber;
                }
            }
        });

        const once = (el, event, fn) => {
            const onceFn = function () {
                el.removeEventListener(event, onceFn);
                fn();
            };
            el.addEventListener(event, onceFn);
        };

        once(this.video, "loadedmetadata", () => {
            tl.fromTo(
                this.video,
                {currentTime: 0},
                {currentTime: this.video.duration || 1}
            );
        });
    },

    preloadVideo() {
        if (window["fetch"]) {
            setTimeout(() => {
                fetch(this.videoSrc)
                    .then(response => response.blob())
                    .then(response => {
                        const blobURL = URL.createObjectURL(response);
                        const t = this.video.currentTime;

                        this.video.setAttribute("src", blobURL);
                        this.video.currentTime = t + 0.01;

                        this.ensureIOSActivation();
                    });
            }, 1000);
        }
    }
});
