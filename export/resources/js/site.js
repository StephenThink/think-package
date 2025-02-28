// This is all you.
import "@fontsource/poppins";
import {alpinejs, animations} from "./components/index.js";
import gsapScrollTriggerLenis from "./components/lenis/gsapScrollTriggerLenis.js";
import debugScreen from "./debug-screen.js";
import barba from '@barba/core';
import gsap from 'gsap';
import barbaCss from '@barba/css';

gsapScrollTriggerLenis();
alpinejs();

// True Disables the Animations.
animations();

// Tailwind debugging tools.
// debugScreen();



// Initialize Barba
// barba.init({
//     transitions: [
//         {
//             name: "cover-page-transition",
//             sync: false, // Ensures animations are properly sequenced
//
//             // 🔹 First load animation (cover page slides in then out)
//             once(data) {
//                 return new Promise((resolve) => {
//                     gsap.fromTo(
//                         "#coverPage",
//                         { x: "100%" }, // Start position (off-screen right)
//                         {
//                             x: "0%", // Slide in to the left
//                             duration: 1,
//                             ease: "power3.out",
//                             onComplete: resolve, // Wait for animation to finish
//                         }
//                     );
//                 }).then(() => {
//                     return new Promise((resolve) => {
//                         gsap.to("#coverPage", {
//                             x: "-100%", // Slide out to the left
//                             duration: 1,
//                             ease: "power3.inOut",
//                             onComplete: resolve,
//                         });
//                     });
//                 });
//             },
//
//             // 🔹 Runs before leaving the current page (show cover, fade out old page)
//             leave(data) {
//                 console.log("Leaving current page...");
//
//                 return new Promise((resolve) => {
//                     // Reset cover page position
//                     gsap.set("#coverPage", { x: "100%" });
//
//                     // Slide cover page in
//                     gsap.to("#coverPage", {
//                         x: "0%", // Bring it in from the right
//                         duration: 0.8,
//                         ease: "power3.out",
//                         onComplete: resolve, // Ensure Barba waits
//                     });
//                 }).then(() => {
//                     return gsap.to(data.current.container, {
//                         opacity: 0, // Fade out the current page
//                         duration: 0.1,
//                         ease: "power3.out",
//                     });
//                 });
//             },
//
//             // 🔹 Runs when entering the new page (wait, then hide cover)
//             enter(data) {
//                 console.log("Entering new page...");
//                 return gsap.from(data.next.container, {
//                     opacity: 0
//                 });
//                 // return new Promise((resolve) => {
//                 //     // Fade in new content AFTER Barba has swapped the container
//                 //     gsap.to(
//                 //         data.next.container,
//                 //         // { opacity: 0 },
//                 //         {
//                 //             opacity: 1,
//                 //             duration: 0.1,
//                 //             ease: "power3.inOut",
//                 //             onComplete: resolve,
//                 //         }
//                 //     );
//                 // })
//             },
//             afterEnter(data) {
//                 console.log("Entering After new page...");
//                   return gsap.to("#coverPage", {
//                       x: "-100%", // Slide it out to the left
//                       delay: 0.5,
//                       duration: 1,
//                       ease: "power3.inOut",
//                   });
//             },
//         },
//     ],
// });

//
// // tell Barba to use the css plugin
// barba.use(barbaCss);
//
// // init Barba
// barba.init();
