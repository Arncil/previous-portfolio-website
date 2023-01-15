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
})
back01.addEventListener('click', () => {
    article01.style.display = "none"
    point01.classList.add('point-01-colored')
    point01.classList.remove('mobile-animation-jello')
})

point02.addEventListener('click', () => {
    article02.style.display = "grid"
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
})
back02.addEventListener('click', () => {
    article02.style.display = "none"
    point02.classList.add('point-02-colored')
    point02.classList.remove('mobile-animation-jello')
})

point03.addEventListener('click', () => {
    article03.style.display = "grid"
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
})
back03.addEventListener('click', () => {
    article03.style.display = "none"
    point03.classList.add('point-03-colored')
    point03.classList.remove('mobile-animation-jello')
})

point04.addEventListener('click', () => {
    article04.style.display = "grid"
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
})
back04.addEventListener('click', () => {
    article04.style.display = "none"
    point04.classList.add('point-04-colored')
    point04.classList.remove('mobile-animation-jello')
})

point05.addEventListener('click', () => {
    article05.style.display = "grid"
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
})
back05.addEventListener('click', () => {
    article05.style.display = "none"
    point05.classList.add('point-05-colored')
    point05.classList.remove('mobile-animation-jello')
})

point06.addEventListener('click', () => {
    article06.style.display = "grid"
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
})
back06.addEventListener('click', () => {
    article06.style.display = "none"
    point06.classList.add('point-06-colored')
    point06.classList.remove('mobile-animation-jello')
})

point07.addEventListener('click', () => {
    article07.style.display = "grid"
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
})
back07.addEventListener('click', () => {
    article07.style.display = "none"
    point07.classList.add('point-07-colored')
    point07.classList.remove('mobile-animation-jello')
})

point08.addEventListener('click', () => {
    article08.style.display = "grid"
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
})
back08.addEventListener('click', () => {
    article08.style.display = "none"
    point08.classList.add('point-08-colored')
    point08.classList.remove('mobile-animation-jello')
})

point09.addEventListener('click', () => {
    article09.style.display = "grid"
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
})
back09.addEventListener('click', () => {
    article09.style.display = "none"
    point09.classList.add('point-09-colored')
    point09.classList.remove('mobile-animation-jello')
})

point10.addEventListener('click', () => {
    article10.style.display = "grid"
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
})
back10.addEventListener('click', () => {
    article10.style.display = "none"
    point10.classList.add('point-10-colored')
    point10.classList.remove('mobile-animation-jello')
})

point11.addEventListener('click', () => {
    article11.style.display = "grid"
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
})
back11.addEventListener('click', () => {
    article11.style.display = "none"
    point11.classList.add('point-11-colored')
    point11.classList.remove('mobile-animation-jello')
})

point12.addEventListener('click', () => {
    article12.style.display = "grid"
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
})
back12.addEventListener('click', () => {
    article12.style.display = "none"
    point12.classList.add('point-12-colored')
    point12.classList.remove('mobile-animation-jello')
})

point13.addEventListener('click', () => {
    article13.style.display = "grid"
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
})
back13.addEventListener('click', () => {
    article13.style.display = "none"
    point13.classList.add('point-13-colored')
    point13.classList.remove('mobile-animation-jello')
})