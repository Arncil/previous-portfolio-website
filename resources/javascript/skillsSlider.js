const speedUpButton = document.getElementById('skill-speed-up-button')
const slowDownButton = document.getElementById('skill-slow-down-button')
const slider = document.getElementById('slider')
let speed = 30

speedUpButton.addEventListener('click', () => {
    if (speed > 10) {
        speed -= 10
    }
    slider.style.animationDuration = speed +'s'
})

slowDownButton.addEventListener('click', () => {
    if (speed < 70) {
        speed += 10
    }
    slider.style.animationDuration = speed +'s'
})