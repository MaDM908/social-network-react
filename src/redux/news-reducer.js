import { stopSubmit } from "redux-form";
import { newsAPI } from "../api/api";

const SET_NEWS_DONE = "SET-NEWS-DONE";
 
const initialState = {
    newsArray: []
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_DONE:
            return {
                ...state,
                newsArray: [...action.payload.newsArray]
                
                
            };
        default:
            return state;
    }
};

const setNews = (newsArray) => ({type: SET_NEWS_DONE, payload: { newsArray }})
export const receiveNews = (phraze) => async (dispatch) => {
    let data = await newsAPI.getAllNews(phraze);
    
    if(data.status === 200)
        
        dispatch(setNews(data.data.articles));
        
        dispatch(stopSubmit("NewSearch"));
};

export default newsReducer;