import gsap from "gsap";

export default (items) => {
    return {
        items: items,
        selectedLocation: items[0].location_title,

        init(){
        },

        toggleLocation(location) {
            this.selectedLocation = this.selectedLocation === location ? null : location;
        }

    };
};
