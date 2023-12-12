const STORE_USER = "STORE_USER";
const GET_CITIES = "GET_CITIES";

const initialState = {
  allUsers: [],
  allCities: [],
};

function rootReducer(state = initialState, action) {
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
