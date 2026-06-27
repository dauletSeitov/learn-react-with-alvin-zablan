import apiFetch from "./apiFetch";
export const getPlants = () => apiFetch("GET", "/auth/plant");
export const getPlantById = ({id}) => apiFetch("GET", `/auth/plant/${id}`);