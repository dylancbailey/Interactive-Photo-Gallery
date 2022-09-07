// Initialize baguetteBox
baguetteBox.run('.content__gallery');

// searchFilter.js
// const search = new Filter('search', 'data-caption');

// Custom search feature
const img_search = document.getElementById('search');
img_search.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let img_caption = document.querySelectorAll('.content__gallery__link');

    img_caption.forEach(img => {
        if (img.getAttribute('data-caption').toLowerCase().includes(currentValue)) {
            img.classList.remove('is-hidden');
        } else {
            img.classList.add('is-hidden');
        }
    })
});

// Opacity animation
const img_cards = document.querySelectorAll('.content__gallery__link');
img_cards.forEach(img => {
    let randomDelay = Math.floor(Math.random() * 500);
    img.style.animation = `fadeIn 1s .${randomDelay}s ease forwards`;
});

