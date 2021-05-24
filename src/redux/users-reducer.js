import { usersAPI } from './../api/api';


const FOLLOW = "FOLLOW-USER";
const UNFOLLOW = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS = "SET-TOTAL-USERS";
const TOOGLE_FETCHING = "TOOGLE-FETCHING";
const TOOGLE_FOLLOWING = "TOOGLE-FOLLOWING";

const initialState = {
    users: [],
    pageSize: 5,
    usersCount: 100,
    currentPage: 1,
    isFetching: false,
    inFollowingProcess: []
};

const followUnfollowObj = (state, action, value) => {
    return {
        ...state,
        users: state.users.map(u => {
            if (u.id === action.id) {
                u.followed = value;
            }
            return u;
        })
    };
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return followUnfollowObj(state, action, true);
        }
        case UNFOLLOW: {
            return followUnfollowObj(state, action, false);
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: 
        case TOOGLE_FETCHING:
        case SET_TOTAL_USERS: {

            return {
                ...state,
                ...action.payload
            }
        }
        case TOOGLE_FOLLOWING: {

            return {
                ...state,
                inFollowingProcess: action.isFetching ?
                    [...state.inFollowingProcess, action.userId]
                    : state.inFollowingProcess.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};

export const followSuccess = (id) => ({ type: FOLLOW, id });
export const unfollowSuccess = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: { currentPage } });
export const setTotalUsers = (usersCount) => ({ type: SET_TOTAL_USERS, payload: { usersCount } });
export const toogleFetching = (value) => ({ type: TOOGLE_FETCHING, payload: { value } });
export const toogleFollowing = (isFetching, userId) => ({ type: TOOGLE_FOLLOWING, isFetching, userId });

export const receiveUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toogleFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
        dispatch(toogleFetching(false));
    };
};
export const changePage = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(toogleFetching(true));
    dispatch(setCurrentPage(pageNumber));
    let data = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(setUsers(data.items));
    dispatch(toogleFetching(false));
};

const followUnfollowFlow = async (APImethod, actionCreator, userId, dispatch) => {
    dispatch(toogleFollowing(true, userId));
    let data = await APImethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(toogleFollowing(false, userId));
    } else {
        dispatch(toogleFollowing(false, userId));
    }
}

export const unfollow = (userId) => (dispatch) => {
    followUnfollowFlow(usersAPI.unfollow, unfollowSuccess, userId, dispatch);
};
export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(usersAPI.follow, followSuccess, userId, dispatch);
};

export default usersReducer;