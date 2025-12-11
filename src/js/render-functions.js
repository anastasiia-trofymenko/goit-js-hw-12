import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  disableScroll: true,
});

export function renderImages(images) {
  const markup = images
    .map(element => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${element.largeImageURL}">
          <img
            class="item-image"
            src="${element.webformatURL}"
            alt="${element.tags}"
          />
        </a>
        <div class="main-content">
          <ul class="card-list">
            <li class="card-list-li">
              <h3>Likes</h3>
              <p>${element.likes}</p>
            </li>
            <li class="card-list-li">
              <h3>Views</h3>
              <p>${element.views}</p>
            </li>
            <li class="card-list-li">
              <h3>Comments</h3>
              <p>${element.comments}</p>
            </li>
            <li class="card-list-li">
              <h3>Downloads</h3>
              <p>${element.downloads}</p>
            </li>
          </ul>
        </div>
      </li>
      `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

export function showBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideBtn() {
  loadMoreBtn.classList.add('is-hidden');
}
