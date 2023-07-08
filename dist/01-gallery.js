import { galleryItems } from './gallery-items.js';
const galleryBoxRef = document.querySelector('.gallery');
const createImagesMarkup = galleryItems.map(createImageItemMarkup).join('');
galleryBoxRef === null || galleryBoxRef === void 0 ? void 0 : galleryBoxRef.insertAdjacentHTML('beforeend', createImagesMarkup);
galleryBoxRef === null || galleryBoxRef === void 0 ? void 0 : galleryBoxRef.addEventListener('click', onImgClick);
function createImageItemMarkup({ preview, original, description }) {
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
    const element = evt.target;
    if (!isElementContainsCssClass(element, 'gallery__image'))
        return;
    evt.preventDefault();
    const isInstanceShow = createImageInstance(element.dataset.source);
    if (isInstanceShow) {
        document.body.addEventListener('keydown', onKeyEscTap);
    }
    function isElementContainsCssClass(element, cssClass) {
        return element.classList.contains(cssClass);
    }
    function createImageInstance(source) {
        // @ts-ignore
        const instance = basicLightbox.create(`
    <img src="${source}" alt={source}>`);
        return instance.show();
    }
    function onKeyEscTap(evt) {
        if (evt.code === 'Escape') {
            isInstanceShow.close();
            document.body.removeEventListener('keydown', onKeyEscTap);
        }
    }
}
//# sourceMappingURL=01-gallery.js.map