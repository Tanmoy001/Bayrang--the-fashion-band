import { configureStore, combineReducers } from '@reduxjs/toolkit';

 import thunk from 'redux-thunk'; // example middleware 
/*  import { composeWithDevTools } from 'redux-devtools-extension'; */
import { productReducer } from '../reducers/productReducer';

const rootReducer = combineReducers({
  [productReducer.reducerPath]: productReducer
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