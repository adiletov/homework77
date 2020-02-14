import {ORDER_PUBLICATION_REQUEST, ORDER_PUBLICATION_SUCCESS} from "./actionOrders";

const initialState = {
    publications : [],
    loading: false
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
       case ORDER_PUBLICATION_SUCCESS:
           return {...state, publications: action.publications};
       case ORDER_PUBLICATION_REQUEST:
           return {...state, loading: action.boolean};
       default:
           return state
   }
};
export default reducer;
