import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('ul.gallery');

// galleryEl.addEventListener('click', onClickShowModal);

// function onClickShowModal(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   galleryEl.removeEventListener('click', onClickShowModal);
//   gallery.on('show.simplelightbox', function () {
//     gallery.options.captionDelay = 250;
//   });
// }

function makeGallery(arr) {
  const galleryItemsMarkup = arr
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}" /></a></li>`;
    })
    .join('');
  return galleryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
}

makeGallery(galleryItems);
const gallery = new SimpleLightbox('ul.gallery a');
console.log(galleryItems);

