import { SIGNED_IN, SIGNED_OUT, REGISTER } from "./Types";
import { authPost, post } from "../../GlobalConstants/ApiCalls";
import { apiRoutes } from "../../GlobalConstants/ApiRoutes";


export const signedin = (params) => (dispatch) => {
  return authPost(apiRoutes.SignIn, params).then(
    (data) => {
      dispatch({
        type: SIGNED_IN,
        payload: {
          user: data,
          errors: data.errors
        },
      });
      return Promise.resolve();
    }
  );
};

export const register = (params) => dispatch => {

  return post(apiRoutes.SignUp, params)
    .then(data => {
      dispatch({
        type: REGISTER,
        payload: {
          user: data,
          errors: data.errors
        }
      })
    })
}

export const signedout = () => {
  localStorage.removeItem('TOKEN')
  localStorage.removeItem('USERID')
  return (dispatch) => {
    dispatch({
      type: SIGNED_OUT,
    })

  }
};

