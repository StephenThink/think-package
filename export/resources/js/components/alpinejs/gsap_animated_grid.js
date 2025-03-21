import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default () => ({


    init() {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.defaults({
            markers: false // Enables debugging markers (remove in production)
        });




// Grid Title Change
        const gridTextItems = document.querySelectorAll('.grid_text-item');
        const gridWrappers = document.querySelectorAll('.grid_wrapper');


        if (gridTextItems.length > 0) {
            gridTextItems[0].classList.add('is--active');
        }

        gridWrappers.forEach((triggerElement, index) => {
            const targetElement = gridTextItems[index];


            if (!targetElement) return;

            const gridParent = triggerElement?.closest('.is--grid'); // Target the main grid container

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top 30%",
                    end: "bottom bottom",
                    // markers: true,
                    onEnter: () => {
                        gridTextItems.forEach(el => el.classList.remove("is--active"));
                        targetElement.classList.add("is--active");
                        changeBg(index);
                    },
                    onEnterBack: () => {
                        gridTextItems.forEach(el => el.classList.remove("is--active"));
                        targetElement.classList.add("is--active");
                        changeBg(index);
                    }
                }
            });


function changeBg(index) {

            if (index % 2 === 0) {
                tl.fromTo(gridParent,
                    { backgroundColor: "white", color: "black" },
                    { backgroundColor: "black", color: "white", duration: 1 , onComplete: () => console.log('odd')}
                );
            } else {
                tl.fromTo(gridParent,
                    { backgroundColor: "black", color: "white" },
                    { backgroundColor: "white", color: "black", duration: 1,  onComplete: () => console.log('even') }
                );
            }
}
        });

    }
});
