function header() {

    const navDOM = document.querySelector('.main-nav');
    const localhost = 'http://localhost:4812/';
    const github = 'https://skaistev.github.io/Dom_EVENTS/';
    const href = location.hostname === 'localhost' ? localhost : github;

    const HTML = `
        <a href="${href}">Home</a>
        <a href="${href}single-button-click/">Single button click</a>
        <a href="${href}counter/">Counter</a>
        <a href="${href}basketball/">Basketball</a>
        <a href="${href}virykle/">Virykle</a>
        <a href="${href}cart/">Prekiu krepselis</a>
        <a href="${href}laikrodis/">Laikrodis</a>
        <a href="${href}laikrodis2/">Laikrodis</a>
        <a href="${href}todo/">TODO</a>
        <a href="${href}tipsCounter/">Tips Counter</a>
    `;
    navDOM.innerHTML = HTML;

}

export { header };