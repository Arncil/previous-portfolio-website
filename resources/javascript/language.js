const language = document.getElementById("language")
let help = 0

    addEventListener('click', () => {
        if (help % 2 === 0) {
            // language.innerHTML = "Language: PL"
            language.innerHTML = "🛠 Maintenance 🛠"
        }
        else {
            language.innerHTML = "Language: ENG"
        }
        help++
    })
