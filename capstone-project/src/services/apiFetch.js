import { getSessionTokenStorage } from "./user";

const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

const apiFetch = (method, path, body = null) => {
  const options = {
    method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const sessionToken = getSessionTokenStorage();
  if (sessionToken) {
    options.headers["Authorization"] = sessionToken;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }
  return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;
