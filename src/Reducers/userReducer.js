import { errorType } from "../Actions/Type/errorType";
import { userType } from "../Actions/Type/userType";
// initial value of state
const initialState = {
  data: [],
  error: [],
};
// Reducer for store
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userType:
      return {
        ...state,
        data: payload,
      };
    case errorType:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
