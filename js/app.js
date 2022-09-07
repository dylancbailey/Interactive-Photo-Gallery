// Initialize baguetteBox
baguetteBox.run('.content__gallery');

// searchFilter.js
// const search = new Filter('search', 'data-caption');

// Custom search feature

const img_search = document.getElementById('search');
img_search.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let img = document.querySelectorAll('.content__gallery__link');

    img.forEach(img_caption => {
        if (img_caption.getAttribute('data-caption').toLowerCase().includes(currentValue)) {
            img_caption.classList.remove('is-hidden');
        } else {
            img_caption.classList.add('is-hidden');
        }
    })
});

// Opacity animation

const img_cards = document.querySelectorAll('.content__gallery__link');
img_cards.forEach(img => {
    let randomDelay = Math.floor(Math.random() * 500);
    img.style.animation = `fadeIn 1s .${randomDelay}s ease forwards`;
});

