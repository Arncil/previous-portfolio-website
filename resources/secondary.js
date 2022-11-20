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