import { stopSubmit } from 'redux-form';
import { authAPI, profileAPI, usersAPI } from '../api/api';


const ADD_POST = "samurai-network/profile/ADD-POST";
const SET_USER_PROFILE = "samurai-network/profile/SET-USER-PROFILE";
const TOOGLE_FETCHING = "samurai-network/profile/TOOGLE-FETCHING";
const SET_STATUS = "samurai-network/profile/SET-STATUS";
const SET_ICON = "samurai-network/profile/SET-ICON";
const SET_PHOTO = "samurai-network/profile/SET-PHOTO";
const SET_PROFILE_DATA = "samurai-network/profile/SET-PROFILE-DATA";
const SET_ERROR = "samurai-network/profile/SET-ERROR";


const initialState = {
    posts: [
        { name: "Phenomenal supplement", likes: "21", id: "1" },
        { name: "Excuse me!", likes: "34", id: "2" },
        { name: "Hello there!", likes: "3", id: "3" }
    ],
    isFetching: false,
    profile: null,
    status: "",
    authIcon: null,
    error: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostObj = {};
            if (action.newPostText !== '') {
                newPostObj = {
                    name: action.newPostText,
                    likes: 0,
                    id: 4
                };
            } else {
                newPostObj = {
                    name: 'Empty post',
                    likes: 0,
                    id: 4
                };
            }
            return {
                ...state,
                posts: [...state.posts, newPostObj],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case TOOGLE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case SET_PHOTO:
            
            return {
                ...state,
                profile: {...state.profile, photos: action.photoObj}
            }
        case SET_ICON:

            return{
                ...state,
                authIcon: action.icon
            }
        case SET_PROFILE_DATA:
            return{
                ...state,
                profile: {...state.profile, ...action.payload}
            }
        case SET_ERROR:
            return{
                ...state,
                error: action.error
            }
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const toogleFetching = (value) => ({ type: TOOGLE_FETCHING, value });
const setStatus = (status) => ({ type: SET_STATUS, status });
const setPhoto = (photoObj) => ({ type: SET_PHOTO, photoObj });
const setIcon = (icon) => ({ type: SET_ICON, icon });
const setProfileData = (payload) => ({ type: SET_PROFILE_DATA, payload });
const setError = (error) => ({ type: SET_ERROR, error });


export const getProfileData = (userId) => async (dispatch) => {
    if (userId) {
        dispatch(toogleFetching(true));
        let data = await usersAPI.getProfile(userId);

        dispatch(setUserProfile(data));
        dispatch(toogleFetching(false));

    } else {
        dispatch(toogleFetching(true));
        let data = await authAPI.getAuthProfile();

        if (data.resultCode === 0) {
            let dataAuth = await usersAPI.getProfile(data.data.id)

            dispatch(setUserProfile(dataAuth));
            dispatch(setIcon(dataAuth.photos.small));
            dispatch(toogleFetching(false));

        } else {
            dispatch(toogleFetching(false));
        }
    };

};

export const getStatus = (userId) => async (dispatch) => {
    if (userId) {
        let data = await profileAPI.getStatus(userId);
        dispatch(setStatus(data));
    } else {
        let dataAuth = await authAPI.getAuthProfile();
        if (dataAuth.resultCode === 0) {
            let data = await profileAPI.getStatus(dataAuth.data.id);

            dispatch(setStatus(data));

        }
    }
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0)
        dispatch(setStatus(status));
};
export const savePhoto = (photoFile) => async (dispatch) => {
    if (photoFile) {
        let data = await profileAPI.savePhoto(photoFile);
        
        if(data.resultCode === 0) {
            dispatch(setPhoto(data.data.photos));
            dispatch(setIcon(data.data.photos.small));
        }
    }
};
export const editProfile = (payload) => async (dispatch, getState) => {
    if (payload) {
        let res = await profileAPI.editProfile(getState().profilePage.profile.userId, payload);
        
        if(res.data.resultCode === 0) {
            dispatch(setProfileData(payload));
            dispatch(setError(null));
        } else {
            //async есть, нужно разделить ошибку, stopSubmit не всей формы, а отдельных частей indexOf?
            dispatch(setError(res.data.messages));
            
            dispatch(stopSubmit("profileData", { _error: res.data.messages ? res.data.messages[0] : "Something wrong!" }))
            return Promise.resolve(res.data.messages);
        }
    }
};

export default profileReducer;



//Осталось только доработать форму обновления профиля, стилизацию соц сети, и залить на githubPages с hashRouter