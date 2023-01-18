const descriptions = document.getElementsByClassName('achievement-description')
const backButtons = document.getElementsByClassName('achievement-description-back')
const achievements = document.getElementsByClassName('achievement-box')

const hideAllDescriptions = () => {
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].classList.add('none')
    }
}

for (let i = 0; i < achievements.length; i++) {
    achievements[i].addEventListener('click', () => {
        hideAllDescriptions()
        descriptions[i].classList.remove('none')
    })
}

for (let i = 0; i < descriptions.length; i++) {
    backButtons[i].addEventListener('click', () => {
        descriptions[i].classList.add('none')
    })
}