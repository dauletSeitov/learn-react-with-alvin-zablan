import apiFetch from "./apiFetch";

export const createUser = ({ username, password }) =>
  apiFetch("POST", "/auth/signup", { username, password });

export const login = ({ username, password }) =>
  apiFetch("POST", "/auth/signin", { username, password });

const TOKEN_STORAGE_KEY = "token";

export const setSessionTokenStorage = (token) => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const getSessionTokenStorage = () => {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const removeSessionTokenStorage = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
};
