import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI, usersAPI } from '../api/api';

const SET_AUTH_USER = "samurai-network/auth/SET-AUTH-USER";
const TOOGLE_FETCHING = "samurai-network/auth/TOOGLE-FETCHING";
const SET_CAPTCHA_URL = "samurai-network/auth/SET-CAPTCHA-URL";
const SET_ICON = "samurai-network/auth/SET-ICON";


const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    icon: null,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_USER:
        case TOOGLE_FETCHING:
        case SET_CAPTCHA_URL:
        case SET_ICON:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};


const toogleFetching = (value) => ({type: TOOGLE_FETCHING, payload: { value }});
const setAuthUser = (id, login, email, isAuth) => ({type: SET_AUTH_USER, payload: {id, email, login, isAuth} });
const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, payload: { captchaUrl }});
const setIcon = (icon) => ({ type: SET_ICON, payload: { icon } });


export const getAuthUserData = () => async (dispatch) => {
    dispatch(toogleFetching(true));
    let data = await authAPI.getAuthProfile()
        if(data.resultCode === 0){
            dispatch(setAuthUser(data.data.id, data.data.login, data.data.email, true));
            usersAPI.getProfile(data.data.id)
            .then(data => {
                dispatch(setIcon(data.photos.small));
                dispatch(toogleFetching(false));
            });
            } else {
                dispatch(toogleFetching(false));
            }
};

export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    dispatch(toogleFetching(true));
    let data = await authAPI.login(email, password, rememberMe, captcha)
    
        if(data.resultCode === 0){
            let data2 = await authAPI.getAuthProfile()
                if(data2.resultCode === 0){
                    dispatch(setAuthUser(data2.data.id, data2.data.login, data2.data.email, true));
                    dispatch(toogleFetching(false));
                    
                } else {
                    dispatch(toogleFetching(false));
                }
        } else {
            if(data.resultCode === 10)
                        
            dispatch(getCaptchaUrl());
            dispatch(stopSubmit("login", { _error: data.messages ? data.messages[0] : "Something wrong!" }))
            dispatch(toogleFetching(false));
        }
};
export const logoutThunk = () => async (dispatch) => {
    dispatch(toogleFetching(true));
    let data = await authAPI.logout()
        if(data.resultCode === 0){
            dispatch(setAuthUser(null, null, null, false));
            dispatch(toogleFetching(false));
        } else {
            dispatch(toogleFetching(false));
        }
};
export const getCaptchaUrl = () => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl()
    if(data)
    
        dispatch(setCaptchaUrl(data.url));
};
export default authReducer;