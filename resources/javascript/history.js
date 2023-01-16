const mark01 = document.getElementById("time-mark-01")
const mark02 = document.getElementById("time-mark-02")
const mark03 = document.getElementById("time-mark-03")
const mark04 = document.getElementById("time-mark-04")
const mark05 = document.getElementById("time-mark-05")
const mark06 = document.getElementById("time-mark-06")
const mark07 = document.getElementById("time-mark-07")
const mark08 = document.getElementById("time-mark-08")
const mark09 = document.getElementById("time-mark-09")
const mark10 = document.getElementById("time-mark-10")
const mark11 = document.getElementById("time-mark-11")
const mark12 = document.getElementById("time-mark-12")
const mark13 = document.getElementById("time-mark-13")

const point01 = document.getElementById("map-point-01")
const point02 = document.getElementById("map-point-02")
const point03 = document.getElementById("map-point-03")
const point04 = document.getElementById("map-point-04")
const point05 = document.getElementById("map-point-05")
const point06 = document.getElementById("map-point-06")
const point07 = document.getElementById("map-point-07")
const point08 = document.getElementById("map-point-08")
const point09 = document.getElementById("map-point-09")
const point10 = document.getElementById("map-point-10")
const point11 = document.getElementById("map-point-11")
const point12 = document.getElementById("map-point-12")
const point13 = document.getElementById("map-point-13")

const article01 = document.getElementById("point-01-description")
const article02 = document.getElementById("point-02-description")
const article03 = document.getElementById("point-03-description")
const article04 = document.getElementById("point-04-description")
const article05 = document.getElementById("point-05-description")
const article06 = document.getElementById("point-06-description")
const article07 = document.getElementById("point-07-description")
const article08 = document.getElementById("point-08-description")
const article09 = document.getElementById("point-09-description")
const article10 = document.getElementById("point-10-description")
const article11 = document.getElementById("point-11-description")
const article12 = document.getElementById("point-12-description")
const article13 = document.getElementById("point-13-description")

const back01 = document.getElementById("back-to-map-01")
const back02 = document.getElementById("back-to-map-02")
const back03 = document.getElementById("back-to-map-03")
const back04 = document.getElementById("back-to-map-04")
const back05 = document.getElementById("back-to-map-05")
const back06 = document.getElementById("back-to-map-06")
const back07 = document.getElementById("back-to-map-07")
const back08 = document.getElementById("back-to-map-08")
const back09 = document.getElementById("back-to-map-09")
const back10 = document.getElementById("back-to-map-10")
const back11 = document.getElementById("back-to-map-11")
const back12 = document.getElementById("back-to-map-12")
const back13 = document.getElementById("back-to-map-13")

let usedBack01 = false
let usedBack02 = false
let usedBack03 = false
let usedBack04 = false
let usedBack05 = false
let usedBack06 = false
let usedBack07 = false
let usedBack08 = false
let usedBack09 = false
let usedBack10 = false
let usedBack11 = false
let usedBack12 = false
let usedBack13 = false


const start = document.getElementById("history-start")
const startButton = document.getElementById("history-start-button")

const endNote = document.getElementById("history-end-note")
const endNoteButton = document.getElementById("history-end-note-button")

const description01_01 = document.getElementById("point-text-01-01")
const description01_02 = document.getElementById("point-text-01-02")
const description01_03 = document.getElementById("point-text-01-03")

const arrowDown01_01 = document.getElementById("arrow-down-01-01")
const arrowUp01_01 = document.getElementById("arrow-up-01-01")
const arrowDown01_02 = document.getElementById("arrow-down-01-02")
const arrowUp01_02 = document.getElementById("arrow-up-01-02")

const description02_01 = document.getElementById("point-text-02-01")
const description02_02 = document.getElementById("point-text-02-02")
const description02_03 = document.getElementById("point-text-02-03")

const arrowDown02_01 = document.getElementById("arrow-down-02-01")
const arrowUp02_01 = document.getElementById("arrow-up-02-01")
const arrowDown02_02 = document.getElementById("arrow-down-02-02")
const arrowUp02_02 = document.getElementById("arrow-up-02-02")

const description03_01 = document.getElementById("point-text-03-01")
const description03_02 = document.getElementById("point-text-03-02")
const description03_03 = document.getElementById("point-text-03-03")

const arrowDown03_01 = document.getElementById("arrow-down-03-01")
const arrowUp03_01 = document.getElementById("arrow-up-03-01")
const arrowDown03_02 = document.getElementById("arrow-down-03-02")
const arrowUp03_02 = document.getElementById("arrow-up-03-02")

const description04_01 = document.getElementById("point-text-04-01")
const description04_02 = document.getElementById("point-text-04-02")
const description04_03 = document.getElementById("point-text-04-03")
const description04_04 = document.getElementById("point-text-04-04")

const arrowDown04_01 = document.getElementById("arrow-down-04-01")
const arrowUp04_01 = document.getElementById("arrow-up-04-01")
const arrowDown04_02 = document.getElementById("arrow-down-04-02")
const arrowUp04_02 = document.getElementById("arrow-up-04-02")
const arrowDown04_03 = document.getElementById("arrow-down-04-03")
const arrowUp04_03 = document.getElementById("arrow-up-04-03")

const description05_01 = document.getElementById("point-text-05-01")
const description05_02 = document.getElementById("point-text-05-02")
const description05_03 = document.getElementById("point-text-05-03")

const arrowDown05_01 = document.getElementById("arrow-down-05-01")
const arrowUp05_01 = document.getElementById("arrow-up-05-01")
const arrowDown05_02 = document.getElementById("arrow-down-05-02")
const arrowUp05_02 = document.getElementById("arrow-up-05-02")

const description06_01 = document.getElementById("point-text-06-01")
const description06_02 = document.getElementById("point-text-06-02")
const description06_03 = document.getElementById("point-text-06-03")
const description06_04 = document.getElementById("point-text-06-04")

const arrowDown06_01 = document.getElementById("arrow-down-06-01")
const arrowUp06_01 = document.getElementById("arrow-up-06-01")
const arrowDown06_02 = document.getElementById("arrow-down-06-02")
const arrowUp06_02 = document.getElementById("arrow-up-06-02")
const arrowDown06_03 = document.getElementById("arrow-down-06-03")
const arrowUp06_03 = document.getElementById("arrow-up-06-03")

const description07_01 = document.getElementById("point-text-07-01")
const description07_02 = document.getElementById("point-text-07-02")
const description07_03 = document.getElementById("point-text-07-03")
const description07_04 = document.getElementById("point-text-07-04")

const arrowDown07_01 = document.getElementById("arrow-down-07-01")
const arrowUp07_01 = document.getElementById("arrow-up-07-01")
const arrowDown07_02 = document.getElementById("arrow-down-07-02")
const arrowUp07_02 = document.getElementById("arrow-up-07-02")
const arrowDown07_03 = document.getElementById("arrow-down-07-03")
const arrowUp07_03 = document.getElementById("arrow-up-07-03")

const description08_01 = document.getElementById("point-text-08-01")
const description08_02 = document.getElementById("point-text-08-02")
const description08_03 = document.getElementById("point-text-08-03")
const description08_04 = document.getElementById("point-text-08-04")
const description08_05 = document.getElementById("point-text-08-05")

const arrowDown08_01 = document.getElementById("arrow-down-08-01")
const arrowUp08_01 = document.getElementById("arrow-up-08-01")
const arrowDown08_02 = document.getElementById("arrow-down-08-02")
const arrowUp08_02 = document.getElementById("arrow-up-08-02")
const arrowDown08_03 = document.getElementById("arrow-down-08-03")
const arrowUp08_03 = document.getElementById("arrow-up-08-03")
const arrowDown08_04 = document.getElementById("arrow-down-08-04")
const arrowUp08_04 = document.getElementById("arrow-up-08-04")

const description09_01 = document.getElementById("point-text-09-01")
const description09_02 = document.getElementById("point-text-09-02")
const description09_03 = document.getElementById("point-text-09-03")

const arrowDown09_01 = document.getElementById("arrow-down-09-01")
const arrowUp09_01 = document.getElementById("arrow-up-09-01")
const arrowDown09_02 = document.getElementById("arrow-down-09-02")
const arrowUp09_02 = document.getElementById("arrow-up-09-02")

const description10_01 = document.getElementById("point-text-10-01")
const description10_02 = document.getElementById("point-text-10-02")
const description10_03 = document.getElementById("point-text-10-03")
const description10_04 = document.getElementById("point-text-10-04")
const description10_05 = document.getElementById("point-text-10-05")

const arrowDown10_01 = document.getElementById("arrow-down-10-01")
const arrowUp10_01 = document.getElementById("arrow-up-10-01")
const arrowDown10_02 = document.getElementById("arrow-down-10-02")
const arrowUp10_02 = document.getElementById("arrow-up-10-02")
const arrowDown10_03 = document.getElementById("arrow-down-10-03")
const arrowUp10_03 = document.getElementById("arrow-up-10-03")
const arrowDown10_04 = document.getElementById("arrow-down-10-04")
const arrowUp10_04 = document.getElementById("arrow-up-10-04")

const description11_01 = document.getElementById("point-text-11-01")
const description11_02 = document.getElementById("point-text-11-02")
const description11_03 = document.getElementById("point-text-11-03")
const description11_04 = document.getElementById("point-text-11-04")

const arrowDown11_01 = document.getElementById("arrow-down-11-01")
const arrowUp11_01 = document.getElementById("arrow-up-11-01")
const arrowDown11_02 = document.getElementById("arrow-down-11-02")
const arrowUp11_02 = document.getElementById("arrow-up-11-02")
const arrowDown11_03 = document.getElementById("arrow-down-11-03")
const arrowUp11_03 = document.getElementById("arrow-up-11-03")

const description12_01 = document.getElementById("point-text-12-01")
const description12_02 = document.getElementById("point-text-12-02")
const description12_03 = document.getElementById("point-text-12-03")

const arrowDown12_01 = document.getElementById("arrow-down-12-01")
const arrowUp12_01 = document.getElementById("arrow-up-12-01")
const arrowDown12_02 = document.getElementById("arrow-down-12-02")
const arrowUp12_02 = document.getElementById("arrow-up-12-02")

const description13_01 = document.getElementById("point-text-13-01")
const description13_02 = document.getElementById("point-text-13-02")
const description13_03 = document.getElementById("point-text-13-03")
const description13_04 = document.getElementById("point-text-13-04")

const arrowDown13_01 = document.getElementById("arrow-down-13-01")
const arrowUp13_01 = document.getElementById("arrow-up-13-01")
const arrowDown13_02 = document.getElementById("arrow-down-13-02")
const arrowUp13_02 = document.getElementById("arrow-up-13-02")
const arrowDown13_03 = document.getElementById("arrow-down-13-03")
const arrowUp13_03 = document.getElementById("arrow-up-13-03")

const triggerEndNote = () => {
    if (usedBack01 + usedBack02 + usedBack03 + usedBack04 +
        usedBack05 + usedBack06 + usedBack07 + usedBack08 +
        usedBack09 + usedBack10 + usedBack11 + usedBack12 +
        usedBack13 === 13) {
            endNote.style.display = "grid"
        }
}

startButton.addEventListener('click', () => {
    start.style.display = "none"
})

mark01.addEventListener('mouseover', () => {
    point01.classList.add('map-point-hover')
    point01.classList.add('point-01-colored')
})
mark01.addEventListener('mouseout', () => {
    point01.classList.remove('map-point-hover')
    point01.classList.remove('point-01-colored')
})
point01.addEventListener('mouseover', () => {
    mark01.classList.add('time-marks-hover')
})
point01.addEventListener('mouseout', () => {
    mark01.classList.remove('time-marks-hover')
})

mark02.addEventListener('mouseover', () => {
    point02.classList.add('point-02-colored')
})
mark02.addEventListener('mouseout', () => {
    point02.classList.remove('point-02-colored')
})
point02.addEventListener('mouseover', () => {
    mark02.classList.add('time-marks-hover')
})
point02.addEventListener('mouseout', () => {
    mark02.classList.remove('time-marks-hover')
})

mark03.addEventListener('mouseover', () => {
    point03.classList.add('point-03-colored')
})
mark03.addEventListener('mouseout', () => {
    point03.classList.remove('point-03-colored')
})
point03.addEventListener('mouseover', () => {
    mark03.classList.add('time-marks-hover')
})
point03.addEventListener('mouseout', () => {
    mark03.classList.remove('time-marks-hover')
})

mark04.addEventListener('mouseover', () => {
    point04.classList.add('point-04-colored')
})
mark04.addEventListener('mouseout', () => {
    point04.classList.remove('point-04-colored')
})
point04.addEventListener('mouseover', () => {
    mark04.classList.add('time-marks-hover')
})
point04.addEventListener('mouseout', () => {
    mark04.classList.remove('time-marks-hover')
})

mark05.addEventListener('mouseover', () => {
    point05.classList.add('point-05-colored')
})
mark05.addEventListener('mouseout', () => {
    point05.classList.remove('point-05-colored')
})
point05.addEventListener('mouseover', () => {
    mark05.classList.add('time-marks-hover')
})
point05.addEventListener('mouseout', () => {
    mark05.classList.remove('time-marks-hover')
})

mark06.addEventListener('mouseover', () => {
    point06.classList.add('point-06-colored')
})
mark06.addEventListener('mouseout', () => {
    point06.classList.remove('point-06-colored')
})
point06.addEventListener('mouseover', () => {
    mark06.classList.add('time-marks-hover')
})
point06.addEventListener('mouseout', () => {
    mark06.classList.remove('time-marks-hover')
})

mark07.addEventListener('mouseover', () => {
    point07.classList.add('point-07-colored')
})
mark07.addEventListener('mouseout', () => {
    point07.classList.remove('point-07-colored')
})
point07.addEventListener('mouseover', () => {
    mark07.classList.add('time-marks-hover')
})
point07.addEventListener('mouseout', () => {
    mark07.classList.remove('time-marks-hover')
})

mark08.addEventListener('mouseover', () => {
    point08.classList.add('point-08-colored')
})
mark08.addEventListener('mouseout', () => {
    point08.classList.remove('point-08-colored')
})
point08.addEventListener('mouseover', () => {
    mark08.classList.add('time-marks-hover')
})
point08.addEventListener('mouseout', () => {
    mark08.classList.remove('time-marks-hover')
})

mark09.addEventListener('mouseover', () => {
    point09.classList.add('point-09-colored')
})
mark09.addEventListener('mouseout', () => {
    point09.classList.remove('point-09-colored')
})
point09.addEventListener('mouseover', () => {
    mark09.classList.add('time-marks-hover')
})
point09.addEventListener('mouseout', () => {
    mark09.classList.remove('time-marks-hover')
})

mark10.addEventListener('mouseover', () => {
    point10.classList.add('point-10-colored')
})
mark10.addEventListener('mouseout', () => {
    point10.classList.remove('point-10-colored')
})
point10.addEventListener('mouseover', () => {
    mark10.classList.add('time-marks-hover')
})
point10.addEventListener('mouseout', () => {
    mark10.classList.remove('time-marks-hover')
})

mark11.addEventListener('mouseover', () => {
    point11.classList.add('point-11-colored')
})
mark11.addEventListener('mouseout', () => {
    point11.classList.remove('point-11-colored')
})
point11.addEventListener('mouseover', () => {
    mark11.classList.add('time-marks-hover')
})
point11.addEventListener('mouseout', () => {
    mark11.classList.remove('time-marks-hover')
})

mark12.addEventListener('mouseover', () => {
    point12.classList.add('point-12-colored')
})
mark12.addEventListener('mouseout', () => {
    point12.classList.remove('point-12-colored')
})
point12.addEventListener('mouseover', () => {
    mark12.classList.add('time-marks-hover')
})
point12.addEventListener('mouseout', () => {
    mark12.classList.remove('time-marks-hover')
})

mark13.addEventListener('mouseover', () => {
    point13.classList.add('point-13-colored')
})
mark13.addEventListener('mouseout', () => {
    point13.classList.remove('point-13-colored')
})
point13.addEventListener('mouseover', () => {
    mark13.classList.add('time-marks-hover')
})
point13.addEventListener('mouseout', () => {
    mark13.classList.remove('time-marks-hover')
})



point01.addEventListener('click', () => {
    article01.style.display = "grid"
    description01_01.style.display = "flex"
    description01_02.style.display = "none"
    description01_03.style.display = "none"
    back01.style.display = "none"
    article01.classList.remove("point-descriptions-grid")
})

mark01.addEventListener('click', () => {
    article01.style.display = "grid"
    article02.style.display = "none"
    article03.style.display = "none"
    article04.style.display = "none"
    article05.style.display = "none"
    article06.style.display = "none"
    article07.style.display = "none"
    article08.style.display = "none"
    article09.style.display = "none"
    article10.style.display = "none"
    article11.style.display = "none"
    article12.style.display = "none"
    article13.style.display = "none"
    start.style.display = "none"
    description01_01.style.display = "flex"
    description01_02.style.display = "none"
    description01_03.style.display = "none"
    back01.style.display = "none"
    article01.classList.remove("point-descriptions-grid")
})
back01.addEventListener('click', () => {
    article01.style.display = "none"
    point01.classList.add('map-point-01-colored')
    point01.classList.remove('mobile-animation-jello')
    point01.style.setProperty("animation", "none", "!important")
    usedBack01 = true
    triggerEndNote()
})

point02.addEventListener('click', () => {
    article02.style.display = "grid"
    description02_01.style.display = "flex"
    description02_02.style.display = "none"
    description02_03.style.display = "none"
    back02.style.display = "none"
    article02.classList.remove("point-descriptions-grid")
})
mark02.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "grid"
    article03.style.display = "none"
    article04.style.display = "none"
    article05.style.display = "none"
    article06.style.display = "none"
    article07.style.display = "none"
    article08.style.display = "none"
    article09.style.display = "none"
    article10.style.display = "none"
    article11.style.display = "none"
    article12.style.display = "none"
    article13.style.display = "none"
    start.style.display = "none"
    description02_01.style.display = "flex"
    description02_02.style.display = "none"
    description02_03.style.display = "none"
    back02.style.display = "none"
    article02.classList.remove("point-descriptions-grid")
})
back02.addEventListener('click', () => {
    article02.style.display = "none"
    point02.classList.add('map-point-02-colored')
    point02.classList.remove('mobile-animation-jello')
    point02.style.setProperty("animation", "none", "!important")
    usedBack02 = true
    triggerEndNote()
})

point03.addEventListener('click', () => {
    article03.style.display = "grid"
    description03_01.style.display = "flex"
    description03_02.style.display = "none"
    description03_03.style.display = "none"
    back03.style.display = "none"
    article03.classList.remove("point-descriptions-grid")
})
mark03.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "none"
    article03.style.display = "grid"
    article04.style.display = "none"
    article05.style.display = "none"
    article06.style.display = "none"
    article07.style.display = "none"
    article08.style.display = "none"
    article09.style.display = "none"
    article10.style.display = "none"
    article11.style.display = "none"
    article12.style.display = "none"
    article13.style.display = "none"
    start.style.display = "none"
    description03_01.style.display = "flex"
    description03_02.style.display = "none"
    description03_03.style.display = "none"
    back03.style.display = "none"
    article03.classList.remove("point-descriptions-grid")
})
back03.addEventListener('click', () => {
    article03.style.display = "none"
    point03.classList.add('map-point-03-colored')
    point03.classList.remove('mobile-animation-jello')
    point03.style.setProperty("animation", "none", "!important")
    usedBack03 = true
    triggerEndNote()
})

point04.addEventListener('click', () => {
    article04.style.display = "grid"
    description04_01.style.display = "flex"
    description04_02.style.display = "none"
    description04_03.style.display = "none"
    description04_04.style.display = "none"
    back04.style.display = "none"
    article04.classList.remove("point-descriptions-grid")
})
mark04.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "none"
    article03.style.display = "none"
    article04.style.display = "grid"
    article05.style.display = "none"
    article06.style.display = "none"
    article07.style.display = "none"
    article08.style.display = "none"
    article09.style.display = "none"
    article10.style.display = "none"
    article11.style.display = "none"
    article12.style.display = "none"
    article13.style.display = "none"
    start.style.display = "none"
    description04_01.style.display = "flex"
    description04_02.style.display = "none"
    description04_03.style.display = "none"
    description04_04.style.display = "none"
    back04.style.display = "none"
    article04.classList.remove("point-descriptions-grid")
})
back04.addEventListener('click', () => {
    article04.style.display = "none"
    point04.classList.add('map-point-04-colored')
    point04.classList.remove('mobile-animation-jello')
    point04.style.setProperty("animation", "none", "!important")
    usedBack04 = true
    triggerEndNote()
})

point05.addEventListener('click', () => {
    article05.style.display = "grid"
    description05_01.style.display = "flex"
    description05_02.style.display = "none"
    description05_03.style.display = "none"
    back05.style.display = "none"
    article05.classList.remove("point-descriptions-grid")
})
mark05.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "none"
    article03.style.display = "none"
    article04.style.display = "none"
    article05.style.display = "grid"
    article06.style.display = "none"
    article07.style.display = "none"
    article08.style.display = "none"
    article09.style.display = "none"
    article10.style.display = "none"
    article11.style.display = "none"
    article12.style.display = "none"
    article13.style.display = "none"
    start.style.display = "none"
    description05_01.style.display = "flex"
    description05_02.style.display = "none"
    description05_03.style.display = "none"
    back05.style.display = "none"
    article05.classList.remove("point-descriptions-grid")
})
back05.addEventListener('click', () => {
    article05.style.display = "none"
    point05.classList.add('map-point-05-colored')
    point05.classList.remove('mobile-animation-jello')
    point05.style.setProperty("animation", "none", "!important")
    usedBack05 = true
    triggerEndNote()
})

point06.addEventListener('click', () => {
    article06.style.display = "grid"
    description06_01.style.display = "flex"
    description06_02.style.display = "none"
    description06_03.style.display = "none"
    back06.style.display = "none"
    article06.classList.remove("point-descriptions-grid")
})
mark06.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "none"
    article03.style.display = "none"
    article04.style.display = "none"
    article05.style.display = "none"
    article06.style.display = "grid"
    article07.style.display = "none"
    article08.style.display = "none"
    article09.style.display = "none"
    article10.style.display = "none"
    article11.style.display = "none"
    article12.style.display = "none"
    article13.style.display = "none"
    start.style.display = "none"
    description06_01.style.display = "flex"
    description06_02.style.display = "none"
    description06_03.style.display = "none"
    description06_04.style.display = "none"
    back06.style.display = "none"
    article06.classList.remove("point-descriptions-grid")
})
back06.addEventListener('click', () => {
    article06.style.display = "none"
    point06.classList.add('map-point-06-colored')
    point06.classList.remove('mobile-animation-jello')
    point06.style.setProperty("animation", "none", "!important")
    usedBack06 = true
    triggerEndNote()
})

point07.addEventListener('click', () => {
    article07.style.display = "grid"
    description07_01.style.display = "flex"
    description07_02.style.display = "none"
    description07_03.style.display = "none"
    description07_04.style.display = "none"
    back07.style.display = "none"
    article07.classList.remove("point-descriptions-grid")
})
mark07.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "none"
    article03.style.display = "none"
    article04.style.display = "none"
    article05.style.display = "none"
    article06.style.display = "none"
    article07.style.display = "grid"
    article08.style.display = "none"
    article09.style.display = "none"
    article10.style.display = "none"
    article11.style.display = "none"
    article12.style.display = "none"
    article13.style.display = "none"
    start.style.display = "none"
    description07_01.style.display = "flex"
    description07_02.style.display = "none"
    description07_03.style.display = "none"
    description07_04.style.display = "none"
    back07.style.display = "none"
    article07.classList.remove("point-descriptions-grid")
})
back07.addEventListener('click', () => {
    article07.style.display = "none"
    point07.classList.add('map-point-07-colored')
    point07.classList.remove('mobile-animation-jello')
    point07.style.setProperty("animation", "none", "!important")
    usedBack07 = true
    triggerEndNote()
})

point08.addEventListener('click', () => {
    article08.style.display = "grid"
    description08_01.style.display = "flex"
    description08_02.style.display = "none"
    description08_03.style.display = "none"
    description08_04.style.display = "none"
    description08_05.style.display = "none"
    back08.style.display = "none"
    article08.classList.remove("point-descriptions-grid")
})
mark08.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "none"
    article03.style.display = "none"
    article04.style.display = "none"
    article05.style.display = "none"
    article06.style.display = "none"
    article07.style.display = "none"
    article08.style.display = "grid"
    article09.style.display = "none"
    article10.style.display = "none"
    article11.style.display = "none"
    article12.style.display = "none"
    article13.style.display = "none"
    start.style.display = "none"
    description08_01.style.display = "flex"
    description08_02.style.display = "none"
    description08_03.style.display = "none"
    description08_04.style.display = "none"
    description08_05.style.display = "none"
    back08.style.display = "none"
    article08.classList.remove("point-descriptions-grid")
})
back08.addEventListener('click', () => {
    article08.style.display = "none"
    point08.classList.add('map-point-08-colored')
    point08.classList.remove('mobile-animation-jello')
    point08.style.setProperty("animation", "none", "!important")
    usedBack08 = true
    triggerEndNote()
})

point09.addEventListener('click', () => {
    article09.style.display = "grid"
    description09_01.style.display = "flex"
    description09_02.style.display = "none"
    description09_03.style.display = "none"
    back09.style.display = "none"
    article09.classList.remove("point-descriptions-grid")
})
mark09.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "none"
    article03.style.display = "none"
    article04.style.display = "none"
    article05.style.display = "none"
    article06.style.display = "none"
    article07.style.display = "none"
    article08.style.display = "none"
    article09.style.display = "grid"
    article10.style.display = "none"
    article11.style.display = "none"
    article12.style.display = "none"
    article13.style.display = "none"
    start.style.display = "none"
    description09_01.style.display = "flex"
    description09_02.style.display = "none"
    description09_03.style.display = "none"
    back09.style.display = "none"
    article09.classList.remove("point-descriptions-grid")
})
back09.addEventListener('click', () => {
    article09.style.display = "none"
    point09.classList.add('map-point-09-colored')
    point09.classList.remove('mobile-animation-jello')
    point09.style.setProperty("animation", "none", "!important")
    usedBack09 = true
    triggerEndNote()
})

point10.addEventListener('click', () => {
    article10.style.display = "grid"
    description10_01.style.display = "flex"
    description10_02.style.display = "none"
    description10_03.style.display = "none"
    description10_04.style.display = "none"
    description10_05.style.display = "none"
    back10.style.display = "none"
    article10.classList.remove("point-descriptions-grid")
})
mark10.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "none"
    article03.style.display = "none"
    article04.style.display = "none"
    article05.style.display = "none"
    article06.style.display = "none"
    article07.style.display = "none"
    article08.style.display = "none"
    article09.style.display = "none"
    article10.style.display = "grid"
    article11.style.display = "none"
    article12.style.display = "none"
    article13.style.display = "none"
    start.style.display = "none"
    description10_01.style.display = "flex"
    description10_02.style.display = "none"
    description10_03.style.display = "none"
    description10_04.style.display = "none"
    description10_05.style.display = "none"
    back10.style.display = "none"
    article10.classList.remove("point-descriptions-grid")
})
back10.addEventListener('click', () => {
    article10.style.display = "none"
    point10.classList.add('map-point-10-colored')
    point10.classList.remove('mobile-animation-jello')
    point10.style.setProperty("animation", "none", "!important")
    usedBack10 = true
    triggerEndNote()
})

point11.addEventListener('click', () => {
    article11.style.display = "grid"
    description11_01.style.display = "flex"
    description11_02.style.display = "none"
    description11_03.style.display = "none"
    description11_04.style.display = "none"
    back11.style.display = "none"
    article11.classList.remove("point-descriptions-grid")
})
mark11.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "none"
    article03.style.display = "none"
    article04.style.display = "none"
    article05.style.display = "none"
    article06.style.display = "none"
    article07.style.display = "none"
    article08.style.display = "none"
    article09.style.display = "none"
    article10.style.display = "none"
    article11.style.display = "grid"
    article12.style.display = "none"
    article13.style.display = "none"
    start.style.display = "none"
    description11_01.style.display = "flex"
    description11_02.style.display = "none"
    description11_03.style.display = "none"
    description11_04.style.display = "none"
    back11.style.display = "none"
    article11.classList.remove("point-descriptions-grid")
})
back11.addEventListener('click', () => {
    article11.style.display = "none"
    point11.classList.add('map-point-11-colored')
    point11.classList.remove('mobile-animation-jello')
    point11.style.setProperty("animation", "none", "!important")
    usedBack11 = true
    triggerEndNote()
})

point12.addEventListener('click', () => {
    article12.style.display = "grid"
    description12_01.style.display = "flex"
    description12_02.style.display = "none"
    description12_03.style.display = "none"
    back12.style.display = "none"
    article12.classList.remove("point-descriptions-grid")
})
mark12.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "none"
    article03.style.display = "none"
    article04.style.display = "none"
    article05.style.display = "none"
    article06.style.display = "none"
    article07.style.display = "none"
    article08.style.display = "none"
    article09.style.display = "none"
    article10.style.display = "none"
    article11.style.display = "none"
    article12.style.display = "grid"
    article13.style.display = "none"
    start.style.display = "none"
    description12_01.style.display = "flex"
    description12_02.style.display = "none"
    description12_03.style.display = "none"
    back12.style.display = "none"
    article12.classList.remove("point-descriptions-grid")
})
back12.addEventListener('click', () => {
    article12.style.display = "none"
    point12.classList.add('map-point-12-colored')
    point12.classList.remove('mobile-animation-jello')
    point12.style.setProperty("animation", "none", "!important")
    usedBack12 = true
    triggerEndNote()
})

point13.addEventListener('click', () => {
    article13.style.display = "grid"
    description13_01.style.display = "flex"
    description13_02.style.display = "none"
    description13_03.style.display = "none"
    description13_04.style.display = "none"
    back13.style.display = "none"
    article13.classList.remove("point-descriptions-grid")
})
mark13.addEventListener('click', () => {
    article01.style.display = "none"
    article02.style.display = "none"
    article03.style.display = "none"
    article04.style.display = "none"
    article05.style.display = "none"
    article06.style.display = "none"
    article07.style.display = "none"
    article08.style.display = "none"
    article09.style.display = "none"
    article10.style.display = "none"
    article11.style.display = "none"
    article12.style.display = "none"
    article13.style.display = "grid"
    start.style.display = "none"
    description13_01.style.display = "flex"
    description13_02.style.display = "none"
    description13_03.style.display = "none"
    description13_04.style.display = "none"
    back13.style.display = "none"
    article13.classList.remove("point-descriptions-grid")
})
back13.addEventListener('click', () => {
    article13.style.display = "none"
    point13.classList.add('map-point-13-colored')
    point13.classList.remove('mobile-animation-jello')
    point13.style.setProperty("animation", "none", "!important")
    usedBack13 = true
    triggerEndNote()
})



arrowDown01_01.addEventListener('click', () => {
    description01_01.style.display = "none"
    description01_02.style.display = "flex"
    back01.style.display = "none"
    article01.classList.remove("point-descriptions-grid")
})

arrowUp01_01.addEventListener('click', () => {
    description01_01.style.display = "flex"
    description01_02.style.display = "none"
    back01.style.display = "none"
    article01.classList.remove("point-descriptions-grid")
})

arrowDown01_02.addEventListener('click', () => {
    description01_02.style.display = "none"
    description01_03.style.display = "flex"
    back01.style.display = "grid"
    article01.classList.add("point-descriptions-grid")
})

arrowUp01_02.addEventListener('click', () => {
    description01_02.style.display = "flex"
    description01_03.style.display = "none"
    back01.style.display = "none"
    article01.classList.remove("point-descriptions-grid")
})


arrowDown02_01.addEventListener('click', () => {
    description02_01.style.display = "none"
    description02_02.style.display = "flex"
    back02.style.display = "none"
    article02.classList.remove("point-descriptions-grid")
})

arrowUp02_01.addEventListener('click', () => {
    description02_01.style.display = "flex"
    description02_02.style.display = "none"
    back02.style.display = "none"
    article02.classList.remove("point-descriptions-grid")
})

arrowDown02_02.addEventListener('click', () => {
    description02_02.style.display = "none"
    description02_03.style.display = "flex"
    back02.style.display = "grid"
    article02.classList.add("point-descriptions-grid")
})

arrowUp02_02.addEventListener('click', () => {
    description02_02.style.display = "flex"
    description02_03.style.display = "none"
    back02.style.display = "none"
    article02.classList.remove("point-descriptions-grid")
})


arrowDown03_01.addEventListener('click', () => {
    description03_01.style.display = "none"
    description03_02.style.display = "flex"
    back03.style.display = "none"
    article03.classList.remove("point-descriptions-grid")
})

arrowUp03_01.addEventListener('click', () => {
    description03_01.style.display = "flex"
    description03_02.style.display = "none"
    back03.style.display = "none"
    article03.classList.remove("point-descriptions-grid")
})

arrowDown03_02.addEventListener('click', () => {
    description03_02.style.display = "none"
    description03_03.style.display = "flex"
    back03.style.display = "grid"
    article03.classList.add("point-descriptions-grid")
})

arrowUp03_02.addEventListener('click', () => {
    description03_02.style.display = "flex"
    description03_03.style.display = "none"
    back03.style.display = "none"
    article03.classList.remove("point-descriptions-grid")
})


arrowDown04_01.addEventListener('click', () => {
    description04_01.style.display = "none"
    description04_02.style.display = "flex"
    back04.style.display = "none"
    article04.classList.remove("point-descriptions-grid")
})

arrowUp04_01.addEventListener('click', () => {
    description04_01.style.display = "flex"
    description04_02.style.display = "none"
    back04.style.display = "none"
    article04.classList.remove("point-descriptions-grid")
})

arrowDown04_02.addEventListener('click', () => {
    description04_02.style.display = "none"
    description04_03.style.display = "flex"
    back04.style.display = "none"
    article04.classList.remove("point-descriptions-grid")
})

arrowUp04_02.addEventListener('click', () => {
    description04_02.style.display = "flex"
    description04_03.style.display = "none"
    back04.style.display = "none"
    article04.classList.remove("point-descriptions-grid")
})

arrowDown04_03.addEventListener('click', () => {
    description04_03.style.display = "none"
    description04_04.style.display = "flex"
    back04.style.display = "grid"
    article04.classList.add("point-descriptions-grid")
})

arrowUp04_03.addEventListener('click', () => {
    description04_03.style.display = "flex"
    description04_04.style.display = "none"
    back04.style.display = "none"
    article04.classList.remove("point-descriptions-grid")
})


arrowDown05_01.addEventListener('click', () => {
    description05_01.style.display = "none"
    description05_02.style.display = "flex"
    back05.style.display = "none"
    article05.classList.remove("point-descriptions-grid")
})

arrowUp05_01.addEventListener('click', () => {
    description05_01.style.display = "flex"
    description05_02.style.display = "none"
    back05.style.display = "none"
    article05.classList.remove("point-descriptions-grid")
})

arrowDown05_02.addEventListener('click', () => {
    description05_02.style.display = "none"
    description05_03.style.display = "flex"
    back05.style.display = "grid"
    article05.classList.add("point-descriptions-grid")
})

arrowUp05_02.addEventListener('click', () => {
    description05_02.style.display = "flex"
    description05_03.style.display = "none"
    back05.style.display = "none"
    article05.classList.remove("point-descriptions-grid")
})


arrowDown06_01.addEventListener('click', () => {
    description06_01.style.display = "none"
    description06_02.style.display = "flex"
    back06.style.display = "none"
    article06.classList.remove("point-descriptions-grid")
})

arrowUp06_01.addEventListener('click', () => {
    description06_01.style.display = "flex"
    description06_02.style.display = "none"
    back06.style.display = "none"
    article06.classList.remove("point-descriptions-grid")
})

arrowDown06_02.addEventListener('click', () => {
    description06_02.style.display = "none"
    description06_03.style.display = "flex"
    back06.style.display = "none"
    article06.classList.remove("point-descriptions-grid")
})

arrowUp06_02.addEventListener('click', () => {
    description06_02.style.display = "flex"
    description06_03.style.display = "none"
    back06.style.display = "none"
    article06.classList.remove("point-descriptions-grid")
})

arrowDown06_03.addEventListener('click', () => {
    description06_03.style.display = "none"
    description06_04.style.display = "flex"
    back06.style.display = "grid"
    article06.classList.add("point-descriptions-grid")
})

arrowUp06_03.addEventListener('click', () => {
    description06_03.style.display = "flex"
    description06_04.style.display = "none"
    back06.style.display = "none"
    article06.classList.remove("point-descriptions-grid")
})


arrowDown07_01.addEventListener('click', () => {
    description07_01.style.display = "none"
    description07_02.style.display = "flex"
    back07.style.display = "none"
    article07.classList.remove("point-descriptions-grid")
})

arrowUp07_01.addEventListener('click', () => {
    description07_01.style.display = "flex"
    description07_02.style.display = "none"
    back07.style.display = "none"
    article07.classList.remove("point-descriptions-grid")
})

arrowDown07_02.addEventListener('click', () => {
    description07_02.style.display = "none"
    description07_03.style.display = "flex"
    back07.style.display = "none"
    article07.classList.remove("point-descriptions-grid")
})

arrowUp07_02.addEventListener('click', () => {
    description07_02.style.display = "flex"
    description07_03.style.display = "none"
    back07.style.display = "none"
    article07.classList.remove("point-descriptions-grid")
})

arrowDown07_03.addEventListener('click', () => {
    description07_03.style.display = "none"
    description07_04.style.display = "flex"
    back07.style.display = "grid"
    article07.classList.add("point-descriptions-grid")
})

arrowUp07_03.addEventListener('click', () => {
    description07_03.style.display = "flex"
    description07_04.style.display = "none"
    back07.style.display = "none"
    article07.classList.remove("point-descriptions-grid")
})


arrowDown08_01.addEventListener('click', () => {
    description08_01.style.display = "none"
    description08_02.style.display = "flex"
    back08.style.display = "none"
    article08.classList.remove("point-descriptions-grid")
})

arrowUp08_01.addEventListener('click', () => {
    description08_01.style.display = "flex"
    description08_02.style.display = "none"
    back08.style.display = "none"
    article08.classList.remove("point-descriptions-grid")
})

arrowDown08_02.addEventListener('click', () => {
    description08_02.style.display = "none"
    description08_03.style.display = "flex"
    back08.style.display = "none"
    article08.classList.remove("point-descriptions-grid")
})

arrowUp08_02.addEventListener('click', () => {
    description08_02.style.display = "flex"
    description08_03.style.display = "none"
    back08.style.display = "none"
    article08.classList.remove("point-descriptions-grid")
})

arrowDown08_03.addEventListener('click', () => {
    description08_03.style.display = "none"
    description08_04.style.display = "flex"
    back08.style.display = "none"
    article08.classList.remove("point-descriptions-grid")
})

arrowUp08_03.addEventListener('click', () => {
    description08_03.style.display = "flex"
    description08_04.style.display = "none"
    back08.style.display = "none"
    article08.classList.remove("point-descriptions-grid")
})

arrowDown08_04.addEventListener('click', () => {
    description08_04.style.display = "none"
    description08_05.style.display = "flex"
    back08.style.display = "grid"
    article08.classList.add("point-descriptions-grid")
})

arrowUp08_04.addEventListener('click', () => {
    description08_04.style.display = "flex"
    description08_05.style.display = "none"
    back08.style.display = "none"
    article08.classList.remove("point-descriptions-grid")
})


arrowDown09_01.addEventListener('click', () => {
    description09_01.style.display = "none"
    description09_02.style.display = "flex"
    back09.style.display = "none"
    article09.classList.remove("point-descriptions-grid")
})

arrowUp09_01.addEventListener('click', () => {
    description09_01.style.display = "flex"
    description09_02.style.display = "none"
    back09.style.display = "none"
    article09.classList.remove("point-descriptions-grid")
})

arrowDown09_02.addEventListener('click', () => {
    description09_02.style.display = "none"
    description09_03.style.display = "flex"
    back09.style.display = "grid"
    article09.classList.add("point-descriptions-grid")
})

arrowUp09_02.addEventListener('click', () => {
    description09_02.style.display = "flex"
    description09_03.style.display = "none"
    back09.style.display = "none"
    article09.classList.remove("point-descriptions-grid")
})


arrowDown10_01.addEventListener('click', () => {
    description10_01.style.display = "none"
    description10_02.style.display = "flex"
    back10.style.display = "none"
    article10.classList.remove("point-descriptions-grid")
})

arrowUp10_01.addEventListener('click', () => {
    description10_01.style.display = "flex"
    description10_02.style.display = "none"
    back10.style.display = "none"
    article10.classList.remove("point-descriptions-grid")
})

arrowDown10_02.addEventListener('click', () => {
    description10_02.style.display = "none"
    description10_03.style.display = "flex"
    back10.style.display = "none"
    article10.classList.remove("point-descriptions-grid")
})

arrowUp10_02.addEventListener('click', () => {
    description10_02.style.display = "flex"
    description10_03.style.display = "none"
    back10.style.display = "none"
    article10.classList.remove("point-descriptions-grid")
})

arrowDown10_03.addEventListener('click', () => {
    description10_03.style.display = "none"
    description10_04.style.display = "flex"
    back10.style.display = "none"
    article10.classList.remove("point-descriptions-grid")
})

arrowUp10_03.addEventListener('click', () => {
    description10_03.style.display = "flex"
    description10_04.style.display = "none"
    back10.style.display = "none"
    article10.classList.remove("point-descriptions-grid")
})

arrowDown10_04.addEventListener('click', () => {
    description10_04.style.display = "none"
    description10_05.style.display = "flex"
    back10.style.display = "grid"
    article10.classList.add("point-descriptions-grid")
})

arrowUp10_04.addEventListener('click', () => {
    description10_04.style.display = "flex"
    description10_05.style.display = "none"
    back10.style.display = "none"
    article10.classList.remove("point-descriptions-grid")
})


arrowDown11_01.addEventListener('click', () => {
    description11_01.style.display = "none"
    description11_02.style.display = "flex"
    back11.style.display = "none"
    article11.classList.remove("point-descriptions-grid")
})

arrowUp11_01.addEventListener('click', () => {
    description11_01.style.display = "flex"
    description11_02.style.display = "none"
    back11.style.display = "none"
    article11.classList.remove("point-descriptions-grid")
})

arrowDown11_02.addEventListener('click', () => {
    description11_02.style.display = "none"
    description11_03.style.display = "flex"
    back11.style.display = "none"
    article11.classList.remove("point-descriptions-grid")
})

arrowUp11_02.addEventListener('click', () => {
    description11_02.style.display = "flex"
    description11_03.style.display = "none"
    back11.style.display = "none"
    article11.classList.remove("point-descriptions-grid")
})

arrowDown11_03.addEventListener('click', () => {
    description11_03.style.display = "none"
    description11_04.style.display = "flex"
    back11.style.display = "grid"
    article11.classList.add("point-descriptions-grid")
})

arrowUp11_03.addEventListener('click', () => {
    description11_03.style.display = "flex"
    description11_04.style.display = "none"
    back11.style.display = "none"
    article11.classList.remove("point-descriptions-grid")
})


arrowDown12_01.addEventListener('click', () => {
    description12_01.style.display = "none"
    description12_02.style.display = "flex"
    back12.style.display = "none"
    article12.classList.remove("point-descriptions-grid")
})

arrowUp12_01.addEventListener('click', () => {
    description12_01.style.display = "flex"
    description12_02.style.display = "none"
    back12.style.display = "none"
    article12.classList.remove("point-descriptions-grid")
})

arrowDown12_02.addEventListener('click', () => {
    description12_02.style.display = "none"
    description12_03.style.display = "flex"
    back12.style.display = "grid"
    article12.classList.add("point-descriptions-grid")
})

arrowUp12_02.addEventListener('click', () => {
    description12_02.style.display = "flex"
    description12_03.style.display = "none"
    back12.style.display = "none"
    article12.classList.remove("point-descriptions-grid")
})


arrowDown13_01.addEventListener('click', () => {
    description13_01.style.display = "none"
    description13_02.style.display = "flex"
    back13.style.display = "none"
    article13.classList.remove("point-descriptions-grid")
})

arrowUp13_01.addEventListener('click', () => {
    description13_01.style.display = "flex"
    description13_02.style.display = "none"
    back13.style.display = "none"
    article13.classList.remove("point-descriptions-grid")
})

arrowDown13_02.addEventListener('click', () => {
    description13_02.style.display = "none"
    description13_03.style.display = "flex"
    back13.style.display = "none"
    article13.classList.remove("point-descriptions-grid")
})

arrowUp13_02.addEventListener('click', () => {
    description13_02.style.display = "flex"
    description13_03.style.display = "none"
    back13.style.display = "none"
    article13.classList.remove("point-descriptions-grid")
})

arrowDown13_03.addEventListener('click', () => {
    description13_03.style.display = "none"
    description13_04.style.display = "flex"
    back13.style.display = "grid"
    article13.classList.add("point-descriptions-grid")
})

arrowUp13_03.addEventListener('click', () => {
    description13_03.style.display = "flex"
    description13_04.style.display = "none"
    back13.style.display = "none"
    article13.classList.remove("point-descriptions-grid")
})

endNoteButton.addEventListener('click', () => {
    endNote.style.display = "none"
})