export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
