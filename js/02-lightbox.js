import { galleryItems } from './gallery-items.js';
// Change code below this line




const gallaryContainer = document.querySelector('.gallery');
const createGallaryImages = createGalleryImagesMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML('afterbegin', createGallaryImages);

function createGalleryImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"  
    />
  </a>
  </li>`
).join('');
}

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt" });

console.log(galleryItems);