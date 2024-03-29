const previous = document.getElementById('design-projects-previous')
const next = document.getElementById('design-projects-next')

const previousMobile = document.getElementById('design-content-previous-mobile')
const previousRegular = document.getElementById('design-content-previous-regular')
const previousDefault = document.getElementById('design-content-previous-default')

const currentMobile = document.getElementById('design-content-current-mobile')
const currentRegular = document.getElementById('design-content-current-regular')
const currentDefault = document.getElementById('design-content-current-default')

const nextMobile = document.getElementById('design-content-next-mobile')
const nextRegular = document.getElementById('design-content-next-regular')
const nextDefault = document.getElementById('design-content-next-default')

let title = document.title
let images = []
let imagesMobile = []
let alts = []
let current = 1

switch (title) {
    case 'Design: Illustrations':
    case 'Design: Ilustracja':
        {
            images = [
                "/previous-portfolio-website/resources/images/collection/design/illustrations/cinewoman.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/druid.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/serious-man.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/monkey.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/pig.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/coala.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/glasses-man.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/larrina.jpg"
            ]
            imagesMobile = [
                "/previous-portfolio-website/resources/images/collection/design/illustrations/cinewoman-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/druid-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/serious-man-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/monkey-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/pig-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/coala-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/glasses-man-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/illustrations/larrina-mobile.jpg"
            ]
            alts = [
                "Woman Selling Tickets Illustration",
                "Celtic Druid Illustration",
                "Serious Man Illustration",
                "Candy Style Monkey Illustration",
                "Candy Style Pig Illustration",
                "Candy Style Coala Illustration",
                "Smiled Man Wearing Glasses Illustration",
                "Woman Selling Sweets Illustration"
            ]
        } break
    case 'Design: Mascot Logo': {
        images = [
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-lisy.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-meowtaurant.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-pugs.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-spine.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-blackcoat.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-foxtales.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-zanily-toy.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-knights.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/arncil-avatar.jpg"
        ]
        imagesMobile = [
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-lisy-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-meowtaurant-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-pugs-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-spine-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-blackcoat-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-foxtales-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-zanily-toy-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/mascot-logo-knights-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/mascot-logo/arncil-avatar-mobile.jpg"
        ]
        alts = [
            "Fox Mascot Logo",
            "Cat Mascot Logo",
            "Pug Mascot Logo",
            "Cactus Mascot Logo",
            "Boy Mascot Logo",
            "Fox Mascot Logo",
            "Jester Mascot Logo",
            "Knight Mascot Logo",
            "Arncil Avatar"
        ]
    } break
    case 'Design: Marketing': {
        images = [
            "/previous-portfolio-website/resources/images/collection/design/marketing/catalog-cover.png",
            "/previous-portfolio-website/resources/images/collection/design/marketing/gaming-house-wall.jpg",
            "/previous-portfolio-website/resources/images/collection/design/marketing/ecozone.png",
            "/previous-portfolio-website/resources/images/collection/design/marketing/catalog-page.png"
        ]
        imagesMobile = [
            "/previous-portfolio-website/resources/images/collection/design/marketing/catalog-cover-mobile.png",
            "/previous-portfolio-website/resources/images/collection/design/marketing/gaming-house-wall-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/marketing/ecozone-mobile.png",
            "/previous-portfolio-website/resources/images/collection/design/marketing/catalog-page-mobile.png"
        ]
        alts = [
            "Design of a Medical Products Catalog",
            "Design of a Wall of the Arcade",
            "Design of the Ad Banner",
            "Design of the Medical Products Catalog's Page"
        ]
    } break
    case 'Design: Photo-Editing':
    case 'Design: Edycja Zdjęć':
        {
            images = [
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-1.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/paracords.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-2.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-3.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-4.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-5.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-6.jpg"
            ]
            imagesMobile = [
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-1-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/paracords-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-2-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-3-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-4-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-5-mobile.jpg",
                "/previous-portfolio-website/resources/images/collection/design/photo-editing/dog-tag-6-mobile.jpg"
            ]
            alts = [
                "Picture of a Fully Black Dog Tag",
                "Picture of Paracords Bracelets",
                "Picture of a Fully Black Dog Tag",
                "Picture of a Classic Dog Tag",
                "Picture of a Classic Dog Tag",
                "Picture of a Camo Dog Tag",
                "Picture of a Blue Dog Tag"
            ]
        } break
    case 'Design: Photo-Manipulation':
    case 'Design: Fotomanipulacja':
        {
            images = [
                "/previous-portfolio-website/resources/images/collection/design/photo-manipulation/sliced-head.png",
                "/previous-portfolio-website/resources/images/collection/design/photo-manipulation/portal.png",
                "/previous-portfolio-website/resources/images/collection/design/photo-manipulation/movie-poster.png"
            ]
            imagesMobile = [
                "/previous-portfolio-website/resources/images/collection/design/photo-manipulation/sliced-head-mobile.png",
                "/previous-portfolio-website/resources/images/collection/design/photo-manipulation/portal-mobile.png",
                "/previous-portfolio-website/resources/images/collection/design/photo-manipulation/movie-poster-mobile.png"
            ]
            alts = [
                "Edited Photo of Sliced Head",
                "Edited Photo of the Portal to Another Dimension",
                "Edited Movie Poster"
            ]
        } break
    case 'Design: Pixel Art': {
        images = [
            "/previous-portfolio-website/resources/images/collection/design/pixel-art/jack-lumber-breath-1000.gif",
            "/previous-portfolio-website/resources/images/collection/design/pixel-art/red_full.gif",
            "/previous-portfolio-website/resources/images/collection/design/pixel-art/john-hunter-breath-1000.gif",
            "/previous-portfolio-website/resources/images/collection/design/pixel-art/sheryl-hunter-breath-1000.gif",
            "/previous-portfolio-website/resources/images/collection/design/pixel-art/pygmy.gif"
        ]
        imagesMobile = [
            "/previous-portfolio-website/resources/images/collection/design/pixel-art/jack-lumber-breath-1000.gif",
            "/previous-portfolio-website/resources/images/collection/design/pixel-art/red_full.gif",
            "/previous-portfolio-website/resources/images/collection/design/pixel-art/john-hunter-breath-1000.gif",
            "/previous-portfolio-website/resources/images/collection/design/pixel-art/sheryl-hunter-breath-1000.gif",
            "/previous-portfolio-website/resources/images/collection/design/pixel-art/pygmy.gif"
        ]
        alts = [
            "Animated Pixel Art of a Logger",
            "Animated Pixel Art of a Red Hair Character",
            "Animated Pixel Art of a Hunter",
            "Animated Pixel Art of a Woman",
            "Animated Pixel Art of a Monster"
        ]
    } break
    case 'Design: NFT': {
        images = [
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-pig.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-rat.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-ox.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-tiger.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-rabbit.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-dragon.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-snake.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-horse.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-goat.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-monkey.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-rooster.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-dog.jpg",
        ]
        imagesMobile = [
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-pig-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-rat-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-ox-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-tiger-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-rabbit-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-dragon-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-snake-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-horse-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-goat-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-monkey-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-rooster-mobile.jpg",
            "/previous-portfolio-website/resources/images/collection/design/nft/lunar-beasts-dog-mobile.jpg"
        ]
        alts = [
            "Lunar Beast NFT Pig",
            "Lunar Beast NFT Rat",
            "Lunar Beast NFT Ox",
            "Lunar Beast NFT Tiger",
            "Lunar Beast NFT Rabbit",
            "Lunar Beast NFT Dragon",
            "Lunar Beast NFT Snake",
            "Lunar Beast NFT Horse",
            "Lunar Beast NFT Goat",
            "Lunar Beast NFT Monkey",
            "Lunar Beast NFT Rooster",
            "Lunar Beast NFT Dog"
        ]
    } break
}

const nextImage = () => {
    previousMobile.srcset = imagesMobile[current]
    previousRegular.srcset = images[current]
    previousDefault.src = images[current]
    previousDefault.alt = alts[current]

    currentMobile.srcset = imagesMobile[current + 1]
    currentRegular.srcset = images[current + 1]
    currentDefault.src = images[current + 1]
    currentDefault.alt = alts[current + 1]

    nextMobile.srcset = imagesMobile[current + 2]
    nextRegular.srcset = images[current + 2]
    nextDefault.src = images[current + 2]
    nextDefault.alt = alts[current + 2]

    current++
}
const previousImage = () => {
    previousMobile.srcset = imagesMobile[current - 2]
    previousRegular.srcset = images[current - 2]
    previousDefault.src = images[current - 2]
    previousDefault.alt = alts[current - 2]

    currentMobile.srcset = imagesMobile[current - 1]
    currentRegular.srcset = images[current - 1]
    currentDefault.src = images[current - 1]
    currentDefault.alt = alts[current - 1]

    nextMobile.srcset = imagesMobile[current]
    nextRegular.srcset = images[current]
    nextDefault.src = images[current]
    nextDefault.alt = alts[current]

    current--
}
const firstImage = () => {
    previousMobile.srcset = imagesMobile[images.length - 1]
    previousRegular.srcset = images[images.length - 1]
    previousDefault.src = images[images.length - 1]
    previousDefault.alt = alts[images.length - 1]

    currentMobile.srcset = imagesMobile[0]
    currentRegular.srcset = images[0]
    currentDefault.src = images[0]
    currentDefault.alt = alts[0]

    nextMobile.srcset = imagesMobile[1]
    nextRegular.srcset = images[1]
    nextDefault.src = images[1]
    nextDefault.alt = alts[1]
}
const lastImage = () => {
    previousMobile.srcset = imagesMobile[images.length - 2]
    previousRegular.srcset = images[images.length - 2]
    previousDefault.src = images[images.length - 2]
    previousDefault.alt = alts[images.length - 2]

    currentMobile.srcset = imagesMobile[images.length - 1]
    currentRegular.srcset = images[images.length - 1]
    currentDefault.src = images[images.length - 1]
    currentDefault.alt = alts[images.length - 1]

    nextMobile.srcset = imagesMobile[0]
    nextRegular.srcset = images[0]
    nextDefault.src = images[0]
    nextDefault.alt = alts[0]

}

previous.addEventListener('click', () => {
    if (current === 1) {
        firstImage()
        current--
    }
    else if (current === 0) {
        lastImage()
        current = images.length - 1
    } else {
        previousImage()
    }
})

next.addEventListener('click', () => {
    if (current === images.length - 2) {
        lastImage()
        current++
    }
    else if (current === images.length - 1) {
        firstImage()
        current = 0
    } else {
        nextImage()
    }

})