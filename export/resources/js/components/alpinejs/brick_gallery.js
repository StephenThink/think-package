export default () =>( {
    open: false,
    title: '',
    imageUrl: '',
    altText: '',
    content: '',
    link: '',
    close(){
        this.open = false;
    },
    appear(){
        this.open = true;
    },
    toggle(imageUrl, altText, title, content, link) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.altText = altText;
        this.content = content;
        this.link = link;
        this.open = !this.open;
    },
    hover(imageUrl, altText, title, content, link) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.altText = altText;
        this.content = content;
        this.link = link;
        this.open = false;
    }
});
