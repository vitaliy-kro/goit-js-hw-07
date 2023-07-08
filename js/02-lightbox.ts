import { galleryItems } from './gallery-items.js';
import {Image} from './types';

const galleryBoxRef = document.querySelector('.gallery')!;
const createImages = galleryItems.map(createImgMarkup).join('');
galleryBoxRef.insertAdjacentHTML('beforeend', createImages);

// @ts-ignore
new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createImgMarkup({ preview, original, description }: Image) {
  return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a></li>`;
}
