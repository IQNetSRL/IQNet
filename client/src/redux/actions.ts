import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_USERS,
  DELETE_USERS,
  GET_USER_BY_ID,
  STORE_USER,
  GET_CITIES,
} from "./actionTypes.js";

interface User {
  name: string;
  lastName: string;
  city: string;
  phoneNumber: string;
  emailAddress: string;
  consult: string;
}

export const getUsers = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get("/users");
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  } catch (error) {
    // alert("Error al obtener usuarios");
  }
};

export const deleteUser = (id: number) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.delete(`/users/user${id}`);
    dispatch({
      type: DELETE_USERS,
      payload: response.data,
    });
  } catch (error) {
    // alert(error.message);
  }
};

export const getUserById = (id: number) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`/users/user/${id}`);
    dispatch({
      type: GET_USER_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    // alert(error.message);
  }
};

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

export const getCities = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/cities/");
    dispatch({
      type: GET_CITIES,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error al cargar las ciudades:", error);
  }
};
