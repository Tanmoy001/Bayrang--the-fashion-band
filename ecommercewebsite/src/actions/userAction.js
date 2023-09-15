import axios from "axios"
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL,LOAD_FAIL,
LOAD_SUCCESS,LOAD_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL,UPDATE_PROFILE_FAIL,
UPDATE_PROFILE_REQUEST,UPDATE_PROFILE_SUCCESS } from "../constants/userConstant"

//LOGIN THE USE OR SIGNIN

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

//SIGNUP OR REGISTER THE NEW USE 

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
//LOADING THE USER FROM COOKIES TO STATE
export const loadUser = () =>async(dispatch)=>{
  try {
    dispatch({ type: LOAD_REQUEST })
   
    const res = await axios.get('/api/v1/me')

    dispatch({ type: LOAD_SUCCESS, payload: res.data.user })
  } catch (error) {
    console.error("Error:", error);
    dispatch({ type: LOAD_FAIL, payload:error.response.data.error })
  }
}

//for logout the user
export const logout = () =>async(dispatch)=>{
  try {
   
    await axios.get('/api/v1/logout')

    dispatch({ type: LOGOUT_SUCCESS })
  } catch (error) {
    console.error("Error:", error);
    dispatch({ type: LOGOUT_FAIL, payload:error.response.data.error })
  }
}

//UPDATING THE USER DETAILS OF THE USER 

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST })
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    };
    const res = await axios.put('/api/v1//me/updateprfile',userData , config)

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: res.data.user })
  } catch (error) {
    console.error("Error:", error);
    dispatch({ type: UPDATE_PROFILE_FAIL, payload:error.response.data.error })
  }
}



// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
};

