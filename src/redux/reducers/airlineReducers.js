import { GET_AIRLINE_SUCCESS, CREATE_NEW_AIRLINE } from "../types";

const initialState = {
  data: [],
};

const airlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AIRLINE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    case CREATE_NEW_AIRLINE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default airlineReducer;
