import axios from 'axios';

import API_DATA from '../data/api.data';

export const getUsers = async () => {
  try {
    const response = await axios(`${API_DATA.baseUrl}/users`);
    return response.data;
  } catch(error) {
    console.error(error);
    alert('ERROR: getUsers - ', error.message);
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios(`${API_DATA.baseUrl}/users/${id}`);
    return response.data;
  } catch(error) {
    console.error(error);
    alert('ERROR: getUser - ', error.message);
  }
};

export const getUserPosts = async (id) => {
  try {
    const response = await axios(`${API_DATA.baseUrl}/users/${id}/posts`);
    return response.data;
  } catch(error) {
    console.error(error);
    alert('ERROR: getUserPosts - ', error.message);
  }
};
