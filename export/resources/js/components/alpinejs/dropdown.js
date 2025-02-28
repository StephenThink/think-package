export default () => ({
    state: false,
    open() {
        this.state = true;
    },
    close() {
        this.state = false
    },
    toggle() {
        this.state =! this.state;
    },
    init() {
        this.state = false;
    }
});
