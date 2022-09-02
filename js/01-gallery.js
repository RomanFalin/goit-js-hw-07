import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgGallery = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);

imgGallery.insertAdjacentHTML("afterbegin", imgMarkup);

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${preview}">
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
    const selectedImage = e.target.getAttribute("data-source");

    const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`,
        {
            onShow: () => {document.addEventListener("keydown", onKeyDownEscape)},
            onClose: () => {document.removeEventListener("keydown", onKeyDownEscape)}
            });
    
    instance.show();

    function onKeyDownEscape(e) {
        if (e.code === 'Escape') {
            instance.close();
        }
    }
}



console.log(galleryItems);