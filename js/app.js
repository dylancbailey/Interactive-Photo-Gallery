// Initialize baguetteBox
baguetteBox.run('.content__gallery');

// searchFilter.js
// const search = new Filter('search', 'data-caption');

// // Custom search
// function search_img() {
//     // Locate the img & search input
//     let img = document.querySelectorAll('.content__gallery__link');
//     let search_query = document.getElementById('search').value;

//     // Loop through the images
//     for (let i = 0; i < img.length; i++) {
//         // If the text is within the image
//         if (img[i].getAttribute('data-caption').toLowerCase()
//             // and the text matches the search
//             .includes(search_query.toLowerCase())) {
//                 // remove the 'is-hidden' class
//                 img[i].classList.remove('is-hidden');  
//                 console.log(img[i]); 
//         } else {
//             // Otherwise, add the class
//             img[i].classList.add('is-hidden');
//         }
//     }
// }

// // Delay
// let typingTimer;
// let typeInterval = 5000;
// let searchInput = document.getElementById('search');

// searchInput.addEventListener('keyup', () => {
//     clearTimeout(typingTimer);
//     typingTimer = setTimeout(search_img, typeInterval);
// });

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