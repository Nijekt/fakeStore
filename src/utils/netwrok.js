import { API_PRODUCTS } from "../constants/api";

export const getApiResource = async (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => error.message);
};

getApiResource(API_PRODUCTS).then((body) => console.log(body));
