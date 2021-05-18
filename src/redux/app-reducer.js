import { getAuthUserData } from "./auth-reducer";



const SET_INITIALIZED = "SET-INITIALIZED";


const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
       
        default:
            return state;
    }
};


const initializingDone = () => ({type: SET_INITIALIZED});

export const initializingProcess = () => (dispatch) => {
//ДА КАК это сделать!!!???
    
    Promise.all([dispatch(getAuthUserData())]).then(
        () => {
            dispatch(initializingDone());
        }
    )
};
export default appReducer;