export default () => ({

    scrollPercentage: 0,
    updateProgress() {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        this.scrollPercentage = (scrollTop / docHeight) * 100;

        // Update the width of the progress bar
        this.$refs.progressBar.style.width = this.scrollPercentage + '%';
    },
    init() {
        window.addEventListener('scroll', () => this.updateProgress());
        window.addEventListener('resize', () => this.updateProgress());
        this.updateProgress(); // Initialize on load
    }
});
