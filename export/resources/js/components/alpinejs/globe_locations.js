import gsap from "gsap";

export default (items) => {
    return {
        items: items,
        selectedLocation: items[0].whereabouts.value,

        init(){
        },

        toggleLocation(location) {
            if (this.selectedLocation === location) {
                return; // Ignore the toggle if the location is the same
            }
            this.selectedLocation = location;
        }

    };
};
