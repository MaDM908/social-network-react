import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    //Приватные свойства
    _state: {
        profilePage: {
            posts: [
                {name: "Phenomenal supplement", likes:"21", id:"1"},
                {name: "Excuse me!", likes:"34", id:"2"},
                {name: "Hello there!", likes:"3", id:"3"}
              ],
            newPostText: "IT4ever!"
        },
        dialogsPage: {
            users: [
                {name: "Andrew", 
                icon: "https://yt3.ggpht.com/a/AATXAJzAHhyPZnJbtmEHrBQtnofAowi0xNFx8Dm3Y-BMSg=s900-c-k-c0x00ffffff-no-rj",
                id: "1"},
                {name: "Kara", icon: "https://im0-tub-ru.yandex.net/i?id=a111ed14b4226f606db1b6a737108c9f&n=13", id: "2"},
                {name: "John", icon: "https://yt3.ggpht.com/a/AATXAJy5Tg5bm6ohLZ9-tPZKsAysR7A3Ew1HTZGPyQ=s900-c-k-c0xffffffff-no-rj-mo",
                id: "3"},
                {name: "Michael", icon: "https://static10.tgstat.ru/channels/_0/f6/f6daf6dd47c2d24c45c74a1759f183c9.jpg", id: "4"},
                {name: "Bob", icon: "https://image.freepik.com/free-vector/male-character-social-network-concept_24877-17895.jpg", id: "5"},
                {name: "Arika", icon: "https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568222-stock-illustration-%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B5-%D0%BB%D0%B8%D1%86%D0%BE-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9.jpg",
                id: "6"}
              ],
            messages: [
                {message: "Hi!", from: "me", id: "1"},
                {message: "How are you?", from: "user", id: "2"},
                {message: "Are you there?", from: "user", id: "3"},
              ],
            newMessageText: ''
        },  
        navbar: {      
            links: [
                {to: "/Profile", name: "Profile", id: "1"},
                {to: "/Dialogs", name: "Dialogs", id: "2"},
                {to: "/Workouts", name: "Workouts", id: "3"},
                {to: "/Anatomy", name: "Anatomy", id: "4"},
                {to: "/Nutrition", name: "Nutrition", id: "5"},
            ], 
            friends: [
                {name: "Andrew", status:"online", id: "1"},
                {name: "Kevin", status:"online", id: "2"},
                {name: "Elwin", status:"online", id: "3"},
                {name: "TEst", status:"online", id: "4"}, 
            ],
            newFriend: ""
        }
    }, 
    _callSubscriber() {
        console.log('State was changed...')
    },

    //Публичные методы
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        profileReducer(store._state.profilePage, action);
        dialogsReducer(store._state.dialogsPage, action);
        sidebarReducer(store._state.navbar, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;