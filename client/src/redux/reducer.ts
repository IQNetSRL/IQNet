import { STORE_USER, GET_CITIES } from "./actionTypes.js";

interface User {
  id: string;
  name: string;
  lastName: string;
  city: string;
  phoneNumber: string;
  emailAddress: string | null;
  consult: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

interface City {
  id: string;
  name: string;
}

interface State {
  allUsers: User[];
  allCities: City[];
}

const initialState: State = {
  allUsers: [],
  allCities: [],
};

interface Action {
  type: string;
  payload: User[];
}

function rootReducer(state: State = initialState, action: Action): State {
  let newUser;
  switch (action.type) {
    case STORE_USER:
      newUser = Array.isArray(action.payload)
        ? action.payload[0]
        : action.payload;
      return {
        ...state,
        allUsers: [...state.allUsers, newUser],
      };
    case GET_CITIES:
      return {
        ...state,
        allCities: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
