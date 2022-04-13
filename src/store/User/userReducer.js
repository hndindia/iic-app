import { GET_ALUMNI,GET_COMPANY } from "./userActions";

const initialState = {
  company:[],
  alumni:[]
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALUMNI: 
      return {...state, alumni:action.payload.data};
    
    case GET_COMPANY:
      return {...state, company:action.payload.data};
      
    default:
      return state;
  }
};

export default userReducers;
