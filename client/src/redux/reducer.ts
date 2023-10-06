import {
  GET_USERS,
  POST_USERS,
  PUT_USERS,
  DELETE_USERS,
  GET_USER_BY_ID,
} from "./actionTypes.js";

interface User {
  id: string;
  name: string;
  lastName: string;
  city: string;
  phoneNumber: number;
  emailAddress: string | null;
  consult: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

interface State {
  allUsers: User[];
  userDeleted: User[];
  userById: User[];
}

const initialState: State = {
  allUsers: [],
  userDeleted: [],
  userById: [],
};

interface Action {
  type: string;
  payload: User[];
}

function rootReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case POST_USERS:
      return {
        ...state,
        userById: action.payload,
      };
    case DELETE_USERS:
      return {
        ...state,
        userDeleted: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        userById: action.payload,
      };
    case PUT_USERS:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default rootReducer;
