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
    case 'Design: Illustrations': {
        images = [
            "/resources/images/collection/design/illustrations/cinewoman.jpg",
            "/resources/images/collection/design/illustrations/druid.jpg",
            "/resources/images/collection/design/illustrations/serious-man.jpg",
            "/resources/images/collection/design/illustrations/monkey.jpg",
            "/resources/images/collection/design/illustrations/pig.jpg",
            "/resources/images/collection/design/illustrations/coala.jpg",
            "/resources/images/collection/design/illustrations/glasses-man.jpg",
            "/resources/images/collection/design/illustrations/larrina.jpg"
        ]
        imagesMobile = [
            "/resources/images/collection/design/illustrations/cinewoman-mobile.jpg",
            "/resources/images/collection/design/illustrations/druid-mobile.jpg",
            "/resources/images/collection/design/illustrations/serious-man-mobile.jpg",
            "/resources/images/collection/design/illustrations/monkey-mobile.jpg",
            "/resources/images/collection/design/illustrations/pig-mobile.jpg",
            "/resources/images/collection/design/illustrations/coala-mobile.jpg",
            "/resources/images/collection/design/illustrations/glasses-man-mobile.jpg",
            "/resources/images/collection/design/illustrations/larrina-mobile.jpg"
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
            "/resources/images/collection/design/mascot-logo/mascot-logo-lisy.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-meowtaurant.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-pugs.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-spine.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-blackcoat.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-foxtales.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-zanily-toy.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-knights.jpg",
            "/resources/images/collection/design/mascot-logo/arncil-avatar.jpg"
        ]
        imagesMobile = [
            "/resources/images/collection/design/mascot-logo/mascot-logo-lisy-mobile.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-meowtaurant-mobile.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-pugs-mobile.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-spine-mobile.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-blackcoat-mobile.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-foxtales-mobile.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-zanily-toy-mobile.jpg",
            "/resources/images/collection/design/mascot-logo/mascot-logo-knights-mobile.jpg",
            "/resources/images/collection/design/mascot-logo/arncil-avatar-mobile.jpg"
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
            "/resources/images/collection/design/marketing/catalog-cover.png",
            "/resources/images/collection/design/marketing/gaming-house-wall.jpg",
            "/resources/images/collection/design/marketing/ecozone.png",
            "/resources/images/collection/design/marketing/catalog-page.png"
        ]
        imagesMobile = [
            "/resources/images/collection/design/marketing/catalog-cover-mobile.png",
            "/resources/images/collection/design/marketing/gaming-house-wall-mobile.jpg",
            "/resources/images/collection/design/marketing/ecozone-mobile.png",
            "/resources/images/collection/design/marketing/catalog-page-mobile.png"
        ]
        alts = [
            "Design of a Medical Products Catalog",
            "Design of a Wall of the Arcade",
            "Design of the Ad Banner",
            "Design of the Medical Products Catalog's Page"
        ]
    } break
    case 'Design: Photo-Editing': {
        images = [
            "/resources/images/collection/design/photo-editing/dog-tag-1.jpg",
            "/resources/images/collection/design/photo-editing/paracords.jpg",
            "/resources/images/collection/design/photo-editing/dog-tag-2.jpg",
            "/resources/images/collection/design/photo-editing/dog-tag-3.jpg",
            "/resources/images/collection/design/photo-editing/dog-tag-4.jpg",
            "/resources/images/collection/design/photo-editing/dog-tag-5.jpg",
            "/resources/images/collection/design/photo-editing/dog-tag-6.jpg"
        ]
        imagesMobile = [
            "/resources/images/collection/design/photo-editing/dog-tag-1-mobile.jpg",
            "/resources/images/collection/design/photo-editing/paracords-mobile.jpg",
            "/resources/images/collection/design/photo-editing/dog-tag-2-mobile.jpg",
            "/resources/images/collection/design/photo-editing/dog-tag-3-mobile.jpg",
            "/resources/images/collection/design/photo-editing/dog-tag-4-mobile.jpg",
            "/resources/images/collection/design/photo-editing/dog-tag-5-mobile.jpg",
            "/resources/images/collection/design/photo-editing/dog-tag-6-mobile.jpg"
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
    case 'Design: Photo-Manipulation': {
        images = [
            "/resources/images/collection/design/photo-manipulation/sliced-head.png",
            "/resources/images/collection/design/photo-manipulation/portal.png",
            "/resources/images/collection/design/photo-manipulation/movie-poster.png"
        ]
        imagesMobile = [
            "/resources/images/collection/design/photo-manipulation/sliced-head-mobile.png",
            "/resources/images/collection/design/photo-manipulation/portal-mobile.png",
            "/resources/images/collection/design/photo-manipulation/movie-poster-mobile.png"
        ]
        alts = [
            "Edited Photo of Sliced Head",
            "Edited Photo of the Portal to Another Dimension",
            "Edited Movie Poster"
        ]
    } break
    case 'Design: Pixel Art': {
        images = [
            "/resources/images/collection/design/pixel-art/jack-lumber-breath-1000.gif",
            "/resources/images/collection/design/pixel-art/red_full.gif",
            "/resources/images/collection/design/pixel-art/john-hunter-breath-1000.gif",
            "/resources/images/collection/design/pixel-art/sheryl-hunter-breath-1000.gif",
            "/resources/images/collection/design/pixel-art/pygmy.gif"
        ]
        imagesMobile = [
            "/resources/images/collection/design/pixel-art/jack-lumber-breath-1000.gif",
            "/resources/images/collection/design/pixel-art/red_full.gif",
            "/resources/images/collection/design/pixel-art/john-hunter-breath-1000.gif",
            "/resources/images/collection/design/pixel-art/sheryl-hunter-breath-1000.gif",
            "/resources/images/collection/design/pixel-art/pygmy.gif"
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
            "/resources/images/collection/design/nft/lunar-beasts-pig.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-rat.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-ox.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-tiger.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-rabbit.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-dragon.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-snake.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-horse.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-goat.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-monkey.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-rooster.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-dog.jpg",
        ]
        imagesMobile = [
            "/resources/images/collection/design/nft/lunar-beasts-pig-mobile.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-rat-mobile.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-ox-mobile.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-tiger-mobile.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-rabbit-mobile.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-dragon-mobile.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-snake-mobile.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-horse-mobile.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-goat-mobile.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-monkey-mobile.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-rooster-mobile.jpg",
            "/resources/images/collection/design/nft/lunar-beasts-dog-mobile.jpg"
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