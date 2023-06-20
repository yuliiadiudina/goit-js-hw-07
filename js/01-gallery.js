// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox 


import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallaryContainer = document.querySelector('.gallery');
const createGallaryImages = createGalleryImagesMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML('afterbegin', createGallaryImages);
gallaryContainer.addEventListener('click', onClickImages);

function createGalleryImagesMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => 
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}" onclick = "event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join('');
}

function onClickImages(e) {
  gallaryContainer.addEventListener('keydown', (e) => {
 if (e.code ==="Escape") {
  image.close();
}
  });
  e.preventDefault(); 
  
 const image = basicLightbox.create(`
  <img src="${e.target.dataset.source}"/>`
);
if (!e.target.classList.contains("gallery__image")) {
  return;
} else {
    image.show();
  }
}

console.log(galleryItems);
