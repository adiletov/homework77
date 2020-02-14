import axiosApi from "../axiosApi";

export const ORDER_PUBLICATION_SUCCESS = 'ORDER_POST_SUCCESS';
export const ORDER_PUBLICATION_REQUEST = 'ORDER_POST_REQUEST';
export const ORDER_PUBLICATION_ERROR = 'ORDER_POST_ERROR';

export const orderPublicationSuccess = publications => ({type: ORDER_PUBLICATION_SUCCESS, publications});
export const orderPublicationError = () => ({type: ORDER_PUBLICATION_ERROR});
export const orderPublicationRequest = boolean => ({type: ORDER_PUBLICATION_REQUEST, boolean});



export const getPublications = () => {
    return async (dispatch) =>{
        try{
            const res = await axiosApi.get('/publications');
            dispatch(orderPublicationSuccess(res.data));
            dispatch(orderPublicationRequest(true))
        }catch (e) {
            dispatch(orderPublicationError());
            dispatch(orderPublicationRequest(true))
        }
    }
};

export const addNewPublication = post => {
    return async (dispatch)=>{
        try{
            await axiosApi.post('/publications', post);
            dispatch(getPublications())
        }catch (e) {
            dispatch(orderPublicationError());
        }
    }
};
