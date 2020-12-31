import { errorType } from "./Type/errorType";
import { userType } from "./Type/userType";
import { userApi } from "../Services/userApi";
export const userAction = (id) => {
  return async (dispatch) => {
    await userApi(id)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: userType, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: errorType, payload: error.message });
      });
  };
};
