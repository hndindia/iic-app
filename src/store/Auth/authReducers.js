import {ERROR, GET_USER, LOGIN} from "./authActions";

const initialState = {
  token:"",
  user:{},
  isError:false,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: 
      return {...state, token:action.payload.token};
    
    case GET_USER:
      return {...state, user:action.payload.user};
    
    case ERROR:
      return {...state, isError:true};

    default:
      return state;
  }
};

export default authReducers;
