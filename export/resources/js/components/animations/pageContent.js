import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const pageContent = (markers = false) => {


// Map through the NodeList to get parent elements
    const sections = Array.from(document.querySelectorAll('#sectionComponent')).map(section => section.parentElement);



    // Animate the Training Content if it is in the window.
    const trainingContent = document.querySelector('#trainingContent');
    if (trainingContent) {

        const trainingHeader = document.getElementById('trainingH1');
        console.log(trainingHeader);

        gsap.from(trainingHeader, {
            opacity: 0,
            x:-150,
            duration: 2,
            ease: 'Power1.easeIn',
        })

        gsap.from(trainingContent, {
            opacity: 0,
            y:20,
            duration: 1,
            ease: 'Power1.easeIn',
            delay: 1
        })
    }

    // Ensure Call to actions exist
    if (!sections.length) {
        if(markers) {
            console.warn("No Sections's found for animations");
        }
        return;
    }

    // Get all ids from the sections
    sections.forEach(section => {

        const elementsToAnimate = [
            section.querySelector('#bodyContent'),
            section.querySelector('#subHeading'),
            section.querySelector('#subHeadingContent'),
            section.querySelector('#fullWidthBox'),
            section.querySelector('#informationBlock'),
            // section.querySelector('#fullImage'),
            // section.querySelector('#fullWidthVideo'),
            section.querySelector('#formSection'),
            // section.querySelector('#columnTwoComponent'),
            section.querySelector('.left-column-component'),
            section.querySelector('.right-column-component'),
            section.querySelector('#columnCallToAction'),
            section.querySelector('#landscapeImageContainer'),
            section.querySelector('#portraitImageContainer'),
            section.querySelector('#listContent'),
            section.querySelector('#listText'),
            // section.querySelector('#columnText'),
            section.querySelector('#quotation'),
            section.querySelector('#quoteText'),
            section.querySelector('#collectionGrid'),
            section.querySelector('#collectionContent'),
            section.querySelector('#teamContent'),
        ].filter(el => el); // Filter out null elements

        elementsToAnimate.forEach((element, index) => {
            gsap.fromTo(element, {
                opacity: 0.2,
                y: 30, // Optional: Adds slight movement
            }, {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                duration: 0.6,
                scrollTrigger: {
                    trigger: element,
                    start: "top 50%",
                    end: "bottom 50%",
                    toggleActions: "play none none none",
                    markers: markers, // Remove in production
                }
            });
        });


    })





// Force ScrollTrigger to refresh and recalculate positions
    ScrollTrigger.refresh(); // Ensures triggers work immediately on load


}


export default pageContent;
