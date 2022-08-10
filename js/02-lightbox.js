import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBoxRef = document.querySelector('.gallery');
const createImages = galleryItems.map(createImgMarkup).join('');
galleryBoxRef.insertAdjacentHTML('beforeend', createImages);

console.log(document.querySelector('.gallery__item'));
const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createImgMarkup({ preview, original, description }) {
  return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a></li>`;
}
