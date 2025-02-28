export default () => ({
    darkMode: localStorage.getItem('darkMode') || localStorage.setItem('darkMode', 'system'),

    light(){
      this.darkMode = 'light'
    },
    dark(){
        this.darkMode = 'dark'
    },
    system(){
        this.darkMode = 'system'
    },
});
