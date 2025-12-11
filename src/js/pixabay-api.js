import axios from 'axios';

const API_KEY = '53655759-0bde0e69f13e467ced1016ab6';

export default searchImages;

const BASE_URL = 'https://pixabay.com/api/';

async function searchImages(query, currentPage) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data; // { totalHits, hits: [...] }
}
