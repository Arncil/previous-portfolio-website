const categories = document.getElementsByClassName('container-categories-nav')[0].children
const skills = document.getElementsByClassName('container-skills-nav')[0].children
const content = document.getElementsByClassName('container-skills')[0].children
const resetCategoriesDisplay = () => {
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none'
    }
}
const resetCategoriesChosen = () => {
    for (let i = 0; i < categories.length; i++) {
        categories[i].classList.remove('skill-element-chosen')
    }
}
const resetSkillDisplayUl = () => {
    for (let i = 0; i < skills.length; i++) {
        skills[i].style.display = 'none'
    }
}
const resetSkillsDisplayLi = () => {
    for (let i = 0; i < skills.length; i++) {
        for (let j = 0; j < skills[i].children.length; j++) {
            skills[i].children[j].style.display = 'none'
        }
    }
}
const resetSkillsChosen = () => {
    for (let i = 0; i < skills.length; i++) {
        for (let j = 0; j < skills[i].children.length; j++) {
            skills[i].children[j].classList.remove('skill-element-chosen')
        }
    }
}
const resetContent = () => {
    for (let i = 0; i < content.length; i++) {
        for (let j = 0; j < content[i].children.length; j++) {
            content[i].style.display = 'none'
            content[i].children[j].style.display = 'none'
        }
    }
}
//------------------------------------------------------------------------------------------------//

// categories - array of li in .container-categories-nav
// skills - array of ul in .container-skills-nav
// content - array of div in .container-skills

// resetCategoriesDisplay() - sets display none for all li in .container-categories-nav
// resetCategoriesChosen() - removes .skill-element-chosen from all li in .container-categories-nav

// resetSkillsDisplayUl() - sets display none for all ul in .container-skills-nav
// resetSkillsDisplayLi() - sets display none for all li in ul in .container-skills-nav
// resetSkillsChosen() - removes .skill-element-chosen from all li in ul in .container-skills-nav

// resetContent() - sets display none for all divs and articles in divs in .container-skills

//------------------------------------------------------------------------------------------------//

resetContent()

// click on li in .container-categories-nav to switch ul in .container-skills-nav
// (click category to see it's skills)
for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', () => {
        resetSkillDisplayUl()
        resetSkillsChosen()
        resetCategoriesChosen()
        resetContent()
        skills[i].style.display = 'grid'
        categories[i].classList.add('skill-element-chosen')
    })
}


// click on li in ul in .container-skills-nav to switch articles in divs in .container-skills
// (click skill to see it's content)
for (let i = 0; i < content.length; i++) {
    for (let j = 0; j < content[i].children.length; j++) {
        skills[i].children[j].addEventListener('click', () => {
            resetSkillsChosen()
            resetContent()
            content[i].style.display = 'grid'
            content[i].children[j].style.display = 'grid'
            skills[i].children[j].classList.add('skill-element-chosen')
        })
    }
}


// sets default screen to first category, skill and content
skills[0].style.display = 'grid'
content[0].style.display = 'grid'
for (let i = 1; i < content.length; i++) {
    content[i].style.display = 'none'
}
content[0].children[0].style.display = 'grid'

skills[0].children[0].classList.add('skill-element-chosen')
categories[0].classList.add('skill-element-chosen')
