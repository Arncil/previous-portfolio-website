const showMore = document.getElementById('character-show-more');
const showLess = document.getElementById('character-show-less');
const characterDescription = document.getElementById('character-description');

showMore.addEventListener('click', () => {
    showMore.style.display = 'none';
    characterDescription.style.display = 'grid';
    showLess.style.display = 'grid';
});

showLess.addEventListener('click', () => {
    showMore.style.display = 'grid';
    characterDescription.style.display = 'none';
    showLess.style.display = 'none';
});