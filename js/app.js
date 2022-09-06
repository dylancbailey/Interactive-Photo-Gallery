// Initialize baguetteBox
baguetteBox.run('.content__gallery');

// Search feature
// const search = new Filter('search', 'data-caption');

// Search feature
// function search_img() {
//     let input = document.getElementById('search').value;
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('content__gallery__link');

//     for (let i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="initial";
//         }
//     }
// }

// Search feature
function search_img() {
    // Locate the img
    let img = document.querySelectorAll('.content__gallery__link');

    // Locate search input
    let search_query = document.getElementById("search").value;

    // Loop through the images
    for (let i = 0; i < img.length; i++) {
        // If the text is within the image
        if (img[i].innerHTML.toLowerCase()
            // and the text matches the search
            .includes(search_query.toLowerCase())) {
                // remove the 'is-hidden' class
                img[i].classList.remove('is-hidden');  
                console.log(img[i]); 
        } else {
            // Otherwise, add the class
            img[i].classList.add('is-hidden');
        }
    }
}