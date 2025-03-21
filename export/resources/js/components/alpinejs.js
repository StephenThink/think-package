// Import the Alpine.js library as 'Alpine'.
import Alpine from 'alpinejs';

// Import the 'focus' plugin from '@alpinejs/focus'.
import focus from '@alpinejs/focus';
import {
    animated_hero,
    backToTop,
    brick_gallery,
    dropdown,
    flip_card,
    full_card,
    full_screen_slider,
    globe_locations, gsap_animated_grid, gsap_animated_image, gsap_animated_panels, gsap_animated_video,
    gsap_animating_headings,
    horizontal_scroller,
    image_information,
    map_locations,
    navBar,
    report_term,
    report_yearly,
    scrollProgress,
    slider,
    theme_changer,
    vertical_scroller
} from "./alpinejs/index.js";
import "@markusantonwolf/ta-analytics/dist/ta-analytics.js"
import {collapse} from "@alpinejs/collapse";
import mixed_information from "./alpinejs/mixed_information.js";



// Define the 'alpinejs' function.
const alpinejs = () => {

    // Register the 'focus' plugin with Alpine.
    Alpine.plugin(focus);
    Alpine.plugin(collapse);

    // Add an event listener for the 'alpine:init' event.
    document.addEventListener("alpine:init", () => {
        // This is used for Modal Cards
        // Define a new Alpine data property called 'full_card'.
        Alpine.data('full_card', full_card);
        Alpine.data('brick_gallery', brick_gallery);
        // This is used for Flip Cards
        // Define another Alpine data property called 'flip_card'.
        Alpine.data('flip_card', flip_card);
        // This is used for the light/dark mode toggle
        // Define a new Alpine component called 'light-switch'.
        Alpine.data('theme_changer', theme_changer);
        Alpine.data('slider', slider);
        Alpine.data('dropdown', dropdown)
        Alpine.data('navBar', navBar)
        Alpine.data('mixed_information', mixed_information)
        Alpine.data('map_locations', map_locations)
        Alpine.data('globe_locations', globe_locations)
        Alpine.data('report_yearly', report_yearly)
        Alpine.data('report_term', report_term)
        Alpine.data('full_screen_slider', full_screen_slider)
        Alpine.data('backToTop', backToTop)
        Alpine.data('vertical_scroller', vertical_scroller)
        Alpine.data('horizontal_scroller', horizontal_scroller)
        Alpine.data('animated_hero', animated_hero)
        Alpine.data('scrollProgress', scrollProgress)
        Alpine.data('image_information', image_information)
        Alpine.data('gsap_animating_headings', gsap_animating_headings)
        Alpine.data('gsap_animated_image', gsap_animated_image)
        Alpine.data('gsap_animated_grid', gsap_animated_grid)
        Alpine.data('gsap_animated_video', gsap_animated_video)
        Alpine.data('gsap_animated_panels', gsap_animated_panels)


    });

    // Set 'Alpine' as a global variable accessible from the window object.
    window.Alpine = Alpine;

    // Start Alpine.js to initialize the components and data properties.
    Alpine.start();
};

// Export the 'alpinejs' function as the default export of this module.
export default alpinejs;
