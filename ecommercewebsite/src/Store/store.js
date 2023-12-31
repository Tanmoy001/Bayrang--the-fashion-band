import { configureStore, combineReducers } from '@reduxjs/toolkit';

 import thunk from 'redux-thunk'; // example middleware 
/*  import { composeWithDevTools } from 'redux-devtools-extension'; */
import { productReducer,productDetailsReducer } from '../reducers/productReducer';
import { profileReducer, userReducer } from '../reducers/userReducer';
const rootReducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user:userReducer,
  profile:profileReducer,
});
const middleware = [ thunk];

const initialState = {
    
  };

const store = configureStore({
  
  reducer: rootReducer,
  initialState,
  middleware
}
)
export default store;