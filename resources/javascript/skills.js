const skillCarousel = document.getElementById('skill-carousel')
const skillDesign = document.getElementById('skill-design')
const slideDesign = document.getElementById('slide-design')
const hideSkill = document.getElementById('hide-skill')

hideSkill.addEventListener('click', () => {
    skillCarousel.style.display = 'block'
    skillDesign.style.display = 'none'
    hideSkill.style.display = 'none'
})

slideDesign.addEventListener('click', () => {
    skillCarousel.style.display = 'none'
    skillDesign.style.display = 'grid'
    hideSkill.style.display = 'grid'
})

