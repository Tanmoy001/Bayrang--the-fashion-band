import axios from "axios"
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "../constants/userConstant"

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

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST })
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    };
    const res = await axios.post('/api/v1/register',userData , config)

    dispatch({ type: REGISTER_SUCCESS, payload: res.data.user })
  } catch (error) {
    console.error("Error:", error);
    dispatch({ type: REGISTER_FAIL, payload:error.response.data.error })
  }
}

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
};

