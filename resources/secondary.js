const showMenu = document.getElementById('show-menu-icon');
const hideMenu = document.getElementById('hide-menu-icon');
const topNav = document.getElementById('top-menu-nav');

showMenu.addEventListener('click', () => {
    topNav.style.display = 'grid';
    showMenu.style.display = 'none';
    hideMenu.style.display = 'block';
});

hideMenu.addEventListener('click', () => {
    topNav.style.display = 'none';
    showMenu.style.display = 'block';
    hideMenu.style.display = 'none';
});

const showMore = document.getElementById('character-show-more');
const showLess = document.getElementById('character-show-less');
const characterDescription = document.getElementById('character-description');

showMore.addEventListener('click', () => {
    showMore.style.display = 'none';
    characterDescription.style.display = 'grid';
    showLess.style.display = 'grid';
});

showLess.addEventListener('click', () => {
    showMore.style.display = 'grid';
    characterDescription.style.display = 'none';
    showLess.style.display = 'none';
});