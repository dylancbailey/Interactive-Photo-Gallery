// Initialize baguetteBox
baguetteBox.run('.content__gallery');

// Custom search feature
const img_search = document.getElementById('search');
img_search.addEventListener('keyup', e => {
    let current_value = e.target.value.toLowerCase();
    let img_caption = document.querySelectorAll('.content__gallery__link');

    img_caption.forEach(img => {
        if (img.getAttribute('data-caption').toLowerCase().includes(current_value)) {
            img.classList.remove('is-hidden');
        } else {
            img.classList.add('is-hidden');
        }
    });
});

// Clear search
let images = document.querySelectorAll('.content__gallery__link');

function clearSearch() {
    img_search.value = "";
    images.forEach(img => {
        img.classList.remove('is-hidden');
    });
}

// Opacity animation
const img_cards = document.querySelectorAll('.content__gallery__link');
img_cards.forEach(img => {
    let randomDelay = Math.floor(Math.random() * 500);
    img.style.animation = `fadeIn 1s .${randomDelay}s ease forwards`;
});