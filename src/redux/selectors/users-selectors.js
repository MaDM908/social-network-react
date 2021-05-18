import {createSelector} from 'reselect';

const getUsers = (state) => {
    return state.usersPage.users
};
export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getPv = (state) => {
    return state.usersPage.pV
};

export const getUsersCount = (state) => {
    return state.usersPage.usersCount;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getInFollowingProcess = (state) => {
    return state.usersPage.inFollowingProcess;
};
