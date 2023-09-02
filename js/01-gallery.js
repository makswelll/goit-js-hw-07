import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

galleryListEl.insertAdjacentHTML("beforeend", markup);
galleryListEl.addEventListener("click", onGalleryListClick);

function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" 
      href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
    })
    .join("");
}

function onGalleryListClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.preventDefault();

  const modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`
  );
  modal.show();

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.close();
    }
  });
}

console.log(galleryItems);
