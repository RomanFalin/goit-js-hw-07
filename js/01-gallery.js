import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgGallery = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);

imgGallery.insertAdjacentHTML("afterbegin", imgMarkup);

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    }).join("")
}

imgGallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) {
        return
    }
    const selectedImage = evt.target.getAttribute("data-source");

    const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`);
    
    instance.show();

    const visible = basicLightbox.visible();
}


console.log(galleryItems);