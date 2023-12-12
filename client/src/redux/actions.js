import axios from "axios";
import { GET_CITIES, STORE_USER } from "./actionTypes.js";

export const storeUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/users/", {
        name: user.name,
        lastName: user.lastName,
        city: user.city,
        phoneNumber: user.phoneNumber,
        emailAddress: user.emailAddress,
        address: user.address,
        consult: user.consult,
      });
      return dispatch({
        type: STORE_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al guardar el usuario:", error);
    }
  };
};

export const getCities = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/cities");
      dispatch({
        type: GET_CITIES,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al obtener las ciudades:", error);
    }
  };
};
