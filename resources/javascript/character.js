const showPicture = document.getElementById('character-show-picture')
const showPage = document.getElementById('character-show-page')
const characterDescription = document.getElementById('character-description')

showPicture.addEventListener('click', () => {
    showPicture.style.display = 'none'
    showPage.style.display = 'grid'
    characterDescription.style.display = 'none'
})

showPage.addEventListener('click', () => {
    showPicture.style.display = 'grid'
    showPage.style.display = 'none'
    characterDescription.style.display = 'grid'
})