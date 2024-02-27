function header() {
    const navDOM = document.querySelector('.main-nav');
    const titleDom = document.querySelector('h1');
    console.log(titleDom.innerText)
    console.log(location.pathname)
    const href = location.hostname === 'localhost' ? '/' : location.pathname.includes(titleDom.innerText)? "./": "../";


    const HTML = `
        <a href="${href}Dom_EVENTS">Home</a>
        <a href="${href}Dom_EVENTS/single-button-click">Single button click</a>
        <a href="${href}Dom_EVENTS/counter/">Counter</a>
        <a href="${href}Dom_EVENTS/basketball/">Basketball</a>
        <a href="${href}Dom_EVENTS/virykle/">Virykle</a>
    `;
    navDOM.innerHTML = HTML;
}

export { header };