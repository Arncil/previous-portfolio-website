const sideMenu = document.getElementById('side-menu')
const showMenuIcon = document.getElementById('show-menu-icon')
const hideMenuIcon = document.getElementById('hide-menu-icon')

showMenuIcon.addEventListener('click', () => {
    sideMenu.style.display = 'grid'
    showMenuIcon.style.display = 'none'
    hideMenuIcon.style.display = 'block'
})

hideMenuIcon.addEventListener('click', () => {
    sideMenu.style.display = 'none'
    showMenuIcon.style.display = 'block'
    hideMenuIcon.style.display = 'none'
})