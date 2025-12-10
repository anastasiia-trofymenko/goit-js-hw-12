import axios from 'axios';

const API_KEY = '53655759-0bde0e69f13e467ced1016ab6';

async function searchImages(query, currentPage) {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  });

  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&${searchParams}`
  );

  return response.data;
}

export default searchImages;
