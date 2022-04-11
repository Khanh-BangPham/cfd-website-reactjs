export const TOKEN_STORAGE_KEY = "token";

export const setToken = (data) => {
  localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(data));
};
export const getToken = () => {
  let token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    token = JSON.parse(token);
  }
  return token;
};
export const clearToken = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
};
