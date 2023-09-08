import axios from "axios"
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS } from "../constants/userConstant"

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST })
    const config = {
      headers: { 'Content-Type': 'application/json' }
    };
    const body = JSON.stringify({ email: email, password: password });
    const res = await axios.post('/api/v1/login', body, config)

    dispatch({ type: LOGIN_SUCCESS, payload: res.data.user })
  } catch (error) {
    console.error("Error:", error);
    dispatch({ type: LOGIN_FAIL, payload:error.response.data.error })
  }
}

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
};
