import axios from 'axios';

// service to fetch items from the Rest API
export const fetchItems = async () => {
  const response = await axios.get('/items');
  return response.data;
};

const BASE_URL = 'http://localhost:8080'; 

// service to get the image URL from the Rest API
export const getImageUrl = (guid) => {
    return `${BASE_URL}/image/${guid}`;
};