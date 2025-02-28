export default () => ({

    show: false,

    init() {
        window.addEventListener('scroll', () => {
            this.show = window.scrollY > 600;
        });
    },

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
