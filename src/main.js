import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import searchImages from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
  showBtn,
  hideBtn,
} from './js/render-functions.js';

const input = document.querySelector('.input');
const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');
const gallery = document.querySelector('.gallery');

let currentPage = 1;
let search = '';

form.addEventListener('submit', async event => {
  event.preventDefault();

  search = input.value.trim();
  // loadMoreBtn.classList.add('is-hidden');
  hideBtn();
  currentPage = 1;
  if (search === '') {
    iziToast.show({
      title: '❌',
      message: 'Please enter the appropriate search query!',
      messageColor: 'white',
      backgroundColor: 'red',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();
  // data.hits  - зображення

  try {
    const data = await searchImages(search, currentPage); // Очікуємо результат запиту

    if (data.hits.length === 0) {
      iziToast.show({
        title: '❌',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: 'black',
        backgroundColor: 'orange',
        position: 'topRight',
      });
      return;
    }

    renderImages(data.hits);
    smoothScroll();
    form.reset();

    if (data.totalHits > 15) {
      // loadMoreBtn.classList.remove('is-hidden');
      showBtn();
    }
  } catch (error) {
    iziToast.show({
      title: '❌',
      message: error.message,
      messageColor: 'black',
      backgroundColor: 'red',
      position: 'topRight',
    });
  } finally {
    // loader.classList.add('is-hidden');
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', onLoadMore);

async function onLoadMore() {
  currentPage++;
  // loader.classList.remove('is-hidden');
  showLoader();

  try {
    const data = await searchImages(search, currentPage);
    renderImages(data.hits);

    smoothScroll();

    const maxPages = Math.ceil(data.totalHits / 15);

    if (currentPage === maxPages) {
      // loadMoreBtn.classList.add('is-hidden');
      hideBtn();

      iziToast.show({
        title: '❌',
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: 'black',
        backgroundColor: 'light blue',
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.show({
      title: '❌',
      message: error.message,
      messageColor: 'black',
      backgroundColor: 'red',
      position: 'topRight',
    });
  } finally {
    // loader.classList.add('is-hidden');
    hideLoader();
  }
}

function smoothScroll() {
  const { height } = gallery.firstElementChild.getBoundingClientRect(); // висота нашої першої лішки

  window.scrollBy({
    top: height * 2, // висота двох карточок
    behavior: 'smooth',
  });
}
