import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

let array = [];
galleryItems.forEach(element => {
  //tworzenie linku
  const link = document.createElement('a');
  link.classList.add('gallery__item');
  link.href = element.original;
  //tworzenie obrazka, łączenie z linkiem
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = element.preview;
  img.alt = element.description;
  link.append(img);
  //dodanie całości do tablicy
  array.push(link);
});

gallery.append(...array);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});

//console.log(galleryItems);