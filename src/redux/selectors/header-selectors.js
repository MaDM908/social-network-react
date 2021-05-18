
export const getIcon = (state) => {
    if(state.profilePage.authIcon)
        return state.profilePage.authIcon
    else
        return state.auth.icon
};