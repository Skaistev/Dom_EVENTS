function header() {
    const navDOM = document.querySelector('.main-nav');
    const titleDom = document.querySelector('h1');
    console.log(titleDom.innerText)
    console.log(location.pathname)
    const href = location.hostname === 'localhost' ? '/' : location.pathname.includes(titleDom.innerText)? "./": "/";


    const HTML = `
        <a href="Dom_EVENTS/${href}">Home</a>
        <a href="Dom_EVENTS/${href}single-button-click">Single button click</a>
        <a href="Dom_EVENTS/${href}counter/">Counter</a>
        <a href="Dom_EVENTS/${href}basketball/">Basketball</a>
        <a href="Dom_EVENTS/${href}virykle/">Virykle</a>
    `;
    navDOM.innerHTML = HTML;
}

export { header };