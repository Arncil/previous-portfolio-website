const eng = document.getElementById("language-eng")
const pl = document.getElementById("language-pl")

eng.addEventListener('click', () => {
    eng.style.display = "none"
    pl.style.display = "grid"
})

pl.addEventListener('click', () => {
    eng.style.display = "grid"
    pl.style.display = "none"
})
