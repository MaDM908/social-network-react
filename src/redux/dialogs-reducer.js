const SENT_MESSAGE = "SENT-MESSAGE";

const initialState = {
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
      ]
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case SENT_MESSAGE:
            let newMessageObj = {};
            if(action.newMessageText !== ""){
                newMessageObj = {    
                    message: action.newMessageText,
                    from: 'me',
                    id: 4
                };
            return{
                ...state,
                messages: [...state.messages, newMessageObj],
            }
            } else return state;
        default:
            return state;
    }
};

export const sentMessage = (newMessageText) => ({type: SENT_MESSAGE, newMessageText});
export default dialogsReducer;