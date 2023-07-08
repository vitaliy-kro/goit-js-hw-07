import { galleryItems } from './gallery-items.js';
import {Image} from './types';

const galleryBoxRef = document.querySelector('.gallery');
const createImagesMarkup = galleryItems.map(createImageItemMarkup).join('');
galleryBoxRef?.insertAdjacentHTML('beforeend', createImagesMarkup);

galleryBoxRef?.addEventListener('click', onImgClick);

function createImageItemMarkup({ preview, original, description }: Image) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}


function onImgClick(evt: Event) {
  const element = evt.target as HTMLElement
  if (!isElementContainsCssClass(element, 'gallery__image')) return;
  evt.preventDefault();

  const isInstanceShow = createImageInstance(element.dataset.source!)
  if (isInstanceShow) {
    document.body.addEventListener('keydown', onKeyEscTap);
  }

  function isElementContainsCssClass(element: HTMLElement, cssClass: string) {
    return element.classList.contains(cssClass);
  }

  function createImageInstance(source: string) {
    // @ts-ignore
 const instance = basicLightbox.create(`
    <img src="${source}" alt={source}>`);
 return instance.show()
  }

  function onKeyEscTap(evt: KeyboardEvent) {
    if (evt.code === 'Escape') {
      isInstanceShow.close();
      document.body.removeEventListener('keydown', onKeyEscTap);
    }
  }
}
