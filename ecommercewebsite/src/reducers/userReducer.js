import{LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL,CLEAR_ERRORS,REGISTER_SUCCESS,REGISTER_REQUEST,REGISTER_FAIL,
  LOAD_SUCCESS,LOAD_FAIL,LOAD_REQUEST,LOGOUT_SUCCESS,LOGOUT_FAIL,UPDATE_PROFILE_FAIL,
UPDATE_PROFILE_REQUEST,UPDATE_PROFILE_SUCCESS,UPDATE_PROFILE_RESET} from "../constants/userConstant"
export const userReducer = ( state = { user : {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
          case REGISTER_REQUEST:
            case LOAD_REQUEST:
          return {
            loading:true,
            isAuthenticated:false,
        };
        case LOGIN_SUCCESS:
          case REGISTER_SUCCESS:
            case LOAD_SUCCESS:
          return {
            ...state,
            loading:false,
            isAuthenticated: true ,
            //            token:action.payload.token,
            user:action.payload,
                    };
          case LOGIN_FAIL:
            case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
            case LOAD_FAIL:
               return {
              loading: false,
              isAuthenticated: false,
              user: null,
              error: action.payload,
            };
            //FOR LOGOUT SUCCESS
            case LOGOUT_SUCCESS:
              return{
              loading:false,
              user:null,
              isAuthenticated:false
              }
              case LOGOUT_FAIL:
                return{
                  ...state,
                  loading:false,
                  error:action.payload
                }
            case CLEAR_ERRORS:
                return {
                   ...state,
                    error:null,
                };
        default:
          return state;
      }
}

export const profileReducer = ( state = {}, action) => {
  switch (action.type) {
      case UPDATE_PROFILE_REQUEST:
        return {
          ...state,
          loading:true,
          
      };
      case UPDATE_PROFILE_SUCCESS:
        return {
          ...state,
          loading:false,
          isUpdated:action.payload,
                  };
      case UPDATE_PROFILE_RESET:
        return{
          ...state,
          isUpdated:false,
        }

      case UPDATE_PROFILE_FAIL:
        return  {...state,
        loading:false,
      error:action.payload};

      case CLEAR_ERRORS:
        return {
           ...state,
            error:null,
        };
default:
  return state;
}
}
