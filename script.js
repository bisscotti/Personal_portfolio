let btnShow = document.getElementById('view-more');
let btnClose = document.getElementById("close");
let container4 = document.getElementById("project-container-4")

btnClose.hidden = true;
btnShow.hidden = false;
function show(){
    container4.style.display = "grid";
    btnShow.hidden = true;
    btnClose.hidden = false;
}
function hide(){
    container4.style.display = "none";
    btnShow.hidden = false;
    btnClose.hidden = true;
}
btnShow.addEventListener('click', show);
btnClose.addEventListener('click', hide);

let pink = localStorage.getItem('pink')
let toggleTheme = document.getElementById('theme-toggle');
let logogo = document.getElementById('logogo')
const iconsMedia = document.querySelectorAll('.icocons');
const projectIcons = document.querySelectorAll('.pricons');

const updatePink = () =>{
    document.body.classList.add('pink');
    localStorage.setItem('pink','active');
    logogo.src = './resources/images/logo-pink.png';
    iconsMedia.forEach(icon => {
        const iconId = icon.id;
        if(iconId === 'ii') icon.src = './resources/images/instagram-icon-pink.png';
        else if(iconId === 'gi') icon.src = './resources/images/github-icon-pink.png';
        else if(iconId === 'di') icon.src = './resources/images/discord-icon-pink.png';
        else if (iconId === 'si') icon.src = './resources/images/spotify-icon-pink.png';
        else if (iconId === 'li') icon.src = './resources/images/linkedin-icon-pink.png';

    });
    projectIcons.forEach(icon => {
        const iconId = icon.id;
        if(iconId === 'folder-icon') icon.src = './resources/images/folder-icon-pink.png';
        else if(iconId === 'github-icon') icon.src = './resources/images/github-icon-pink.png';
        else if(iconId === 'link-icon') icon.src = './resources/images/link-icon-pink.png';

    });
}
const removePink = ()=>{
    document.body.classList.remove('pink');
    localStorage.setItem('pink', null);
    logogo.src = './resources/images/logo.png';
    iconsMedia.forEach(icon => {
        const iconId = icon.id;
        if(iconId === 'ii') icon.src = './resources/images/instagram-icon.png';
        else if(iconId === 'gi') icon.src = './resources/images/github-icon.png';
        else if(iconId === 'di') icon.src = './resources/images/discord-icon.png';
        else if (iconId === 'si') icon.src = './resources/images/spotify-icon.png';
        else if (iconId === 'li') icon.src = './resources/images/linkedin-icon.png';

    });
    projectIcons.forEach(icon => {
        const iconId = icon.id;
        if(iconId === 'folder-icon') icon.src = './resources/images/folder-icon.png';
        else if(iconId === 'github-icon') icon.src = './resources/images/github-icon.png';
        else if(iconId === 'link-icon') icon.src = './resources/images/link-icon.png';

    });
}
if(pink === 'active') updatePink();

toggleTheme.addEventListener('click', () =>{
    pink = localStorage.getItem('pink');
    pink !== 'active' ? updatePink() : removePink();
});

