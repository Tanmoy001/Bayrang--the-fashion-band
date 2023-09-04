import axios from "axios"
import{ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAIL,CLEAR_ERRORS,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_SUCCESS} from "../constants/productConstants"

export const getProduct =(keyword="",currentPage=1,limit=8,price=[0,5000],Category,rating=0)=>async(dispatch)=>{
  
    
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST
        })
        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&limit=${limit}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${rating}`;
        console.log(link);
        if(Category){
         link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&limit=${limit}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${Category}`;
        }

            const {data} = await axios.get(link)
       
          dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload : data
          })  
    }
    catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
            

        });
    }
}

export const getProducthome =(limit=8)=>async(dispatch)=>{
  
    
  try {
      dispatch({
          type: ALL_PRODUCT_REQUEST
      })
      let link = `/api/v1/products?&limit=${limit}`;
      console.log(limit);

          const {data} = await axios.get(link)
        console.log(data);
        dispatch({
          type:ALL_PRODUCT_SUCCESS,
          payload : data
        })  
  }
  catch (error) {
      dispatch({
          type: ALL_PRODUCT_FAIL,
          payload: error.response.data.message,

      });
  }
}
/* export const getProductDetails =(id)=>async(dispatch)=>{
    
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        })
            const {data} = await axios.get(`/api/v1/product/${id}`)
          console.log(data);
          dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload : data.product
          })  
    }
    catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,

        });
    }
} */
export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/product/${id}`);
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//clearing Errors
export const clearErrors =()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS})
};
