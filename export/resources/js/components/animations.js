import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import heroes from "./animations/heroes.js";
import callToActions from "./animations/callToActions.js";
import pageContent from "./animations/pageContent.js";
import navigation from "./animations/navigation.js";
import footer from "./animations/footer.js";
import teamList from "./animations/teamList.js";
import stackedBoxes from "./animations/stackedBoxes.js";
import unevenBoxes from "./animations/unevenBoxes.js";
import fullWidthImages from "./animations/fullWidthImages.js";
import fullWidthVideos from "./animations/fullWidthVideos.js";
import columns from "./animations/columns.js";
import gallery from "./animations/gallery.js";
import bento from "./animations/bento.js";
import popularGrid from "./animations/popularGrid.js";

gsap.registerPlugin(ScrollTrigger);


const animations = (debug = false) => {

    // If not in debug mode then this is lets the animations run.
    if (!debug) {
        navigation();
        heroes();
        callToActions();
        pageContent();
        // footer();
        teamList();
        stackedBoxes();
        unevenBoxes();
        fullWidthImages();
        fullWidthVideos();
        // columns(true);
        gallery();
        bento();
        popularGrid();
    }

}


export default animations;
