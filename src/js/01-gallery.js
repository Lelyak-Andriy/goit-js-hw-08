import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');



const cartMarkup = createPictureCartMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', cartMarkup);

function createPictureCartMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
})
.join('');
};


const lightbox = new SimpleLightbox('.gallery a');

galleryRef.addEventListener("click", onPictureClick);

function onPictureClick(event) {
    event.preventDefault();
    
    event.target.setAttribute("title", "lightbox.options.captionData");

    lightbox.options.captionsData = 'alt';
    lightbox.options.captionType = 'attr';
    lightbox.options.captionPosition = 'bottom';
    lightbox.options.captionDelay = 250;
    }