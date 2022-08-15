import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBoxRef = document.querySelector('.gallery');
const createImages = galleryItems.map(createImgMarkup).join('');
galleryBoxRef.insertAdjacentHTML('beforeend', createImages);

galleryBoxRef.addEventListener('click', onImgClick);

function createImgMarkup({ preview, original, description }) {
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

function onImgClick(evt) {
  const isContainsClass = evt.target.classList.contains('gallery__image');
  if (!isContainsClass) return;
  evt.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">`);
  instance.show();
  if (instance.show()) {
    document.body.addEventListener('keydown', onKeyEscTap);
  }

  function onKeyEscTap(evt) {
    if (evt.code === 'Escape') {
      instance.close();
      document.body.removeEventListener('keydown', onKeyEscTap);
    }
  }
}
