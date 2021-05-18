/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
const NEW_FRIEND_TEXT = "NEW-FRIEND-TEXT";
const UPDATE_FRIEND_TEXT = "UPDATE-FRIEND-TEXT";

const initialState = {
    links: [
        {to: "/Profile", name: "Profile", id: "1"},
        {to: "/Dialogs", name: "Dialogs", id: "2"},
        {to: "/Users", name: "Users", id: "3"},
        {to: "/Anatomy", name: "Anatomy", id: "4"},
        {to: "/Nutrition", name: "Nutrition", id: "5"},
    ], 
    friends: [
        {name: "Andrew", online: true, id: "1"},
        {name: "Kevin", online: false, id: "2"},
        {name: "Elwin", online: true, id: "3"},
        {name: "TEst", online: true, id: "4"}, 
    ],
    newFriendText: ""
};

    
const sidebarReducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_FRIEND_TEXT:
            let newFriendObj = {};
            if(state.newFriendText !== ""){
                newFriendObj = {
                    name: state.newFriendText,
                    online: false,
                    id: 5
                }
            return {
                ...state,
                friends: [...state.friends, newFriendObj],
                newFriendText: ""
            };
        }
        case UPDATE_FRIEND_TEXT:
            return {
                ...state,
                newFriendText: action.text
            };
        default:
            return state;
    }
};

export const newFriendActionCreator = () => ({type: NEW_FRIEND_TEXT});
export const updateFriendActionCreator = (text) => ({type: UPDATE_FRIEND_TEXT, text: text});


export default sidebarReducer;
