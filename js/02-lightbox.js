import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const imageMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}"
      alt="${description}">
    </a>
  </li>`
}).join('');

galleryRef.innerHTML = imageMarkup;

galleryRef.addEventListener("click", onGalleryItemClick);
const galleryBox = new SimpleLightbox('.gallery a');
galleryBox.options.captionDelay = 250;
galleryBox.options.captionsData = "alt";

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') { return; }
  };

