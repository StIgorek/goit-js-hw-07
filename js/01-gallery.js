import { galleryItems } from './gallery-items.js';
// Change code below this line

//Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//Реалізація делегування на ul.gallery і отримання url великого зображення.
//Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
//Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
//Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
//Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const imageMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}"
      alt="${description}">
    </a>
  </li>`
}).join('');

galleryRef.innerHTML = imageMarkup;

galleryRef.addEventListener("click", onGalleryItemClick);
function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") { return; }
  const instance = basicLightbox.create(
    `
      <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="600">
      </div>`,
    {
      onShow: () => {
        document.addEventListener("keydown", onModalKeyDown);
      },
      onClose: () => {
        document.removeEventListener("keydown", onModalKeyDown);
      },
    }
  );
  instance.show();
  const modalElement = document.querySelector(".modal");
  modalElement.addEventListener("click", () => {
    instance.close();
  });
  function onModalKeyDown(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}


//Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням 
//користувач буде перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.