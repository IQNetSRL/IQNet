import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_USERS,
  POST_USERS,
  DELETE_USERS,
  GET_USER_BY_ID,
} from "./actionTypes.js";

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

export const postUsers =
  (userClerkId: number, user: string, fullName: string) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`/users`, {
        clerkId: userClerkId,
        user: user,
        fullName: fullName,
      });
      return dispatch({
        type: POST_USERS,
        payload: response.data,
      });
    } catch (error) {
      // alert(error.message);
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
