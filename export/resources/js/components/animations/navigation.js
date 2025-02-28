import gsap from 'gsap';



const navigation = () => {

    const mainNav = document.getElementById('mainNav');
    const navLinks = document.getElementById('navLinks');
    const trainingArea = document.querySelector('.training-header');

    if (trainingArea) return; // If you are in the Training Area dont animate the NavBar

    const tl = gsap.timeline({delay: 1});

    tl.from(mainNav, {
        y:-100,
        autoAlpha: 0,
        opacity: 0,
        duration: 1,
        ease: 'linear',
        clearProps: "all",
        delay: 2

    }, 0)

    tl.from(navLinks, {
            y: -100,
            opacity: 0,
            ease: "back.out(1.7)", // Adding a bounce effect
            duration: 1,
            delay: 3,
            clearProps: "all"

        },
        0.3);

}


export default navigation;
