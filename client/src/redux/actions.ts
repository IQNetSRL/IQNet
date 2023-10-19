import { Dispatch } from "redux";
import { GET_CITIES, STORE_USER } from "./actionTypes.js";

interface User {
  name: string;
  lastName: string;
  city: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  consult: string;
}

export const storeUser = (user: User) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("No se pudo guardar el usuario.");
      }

      const newUser = await response.json();

      dispatch({ type: STORE_USER, payload: newUser });
      return newUser;
    } catch (error) {
      console.error("Error al guardar el usuario:", error);
    }
  };
};

export const getCities = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/cities", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudieron obtener las ciudades.");
      }

      const cities = await response.json();

      dispatch({ type: GET_CITIES, payload: cities });
    } catch (error) {
      console.error("Error al obtener las ciudades:", error);
    }
  };
};
