import apiFetch from "./apiFetch";
export const addToCart = ({ plantId, quantity, color }) =>
  apiFetch("POST", `/auth/cart/${plantId}`, {
    quantity: quantity,
    color: color,
  });

export const getCart = () => apiFetch("GET", `/auth/cart`);


export const removeCartById = ({itemId}) => apiFetch("DELETE", `/auth/cart/${itemId}`);