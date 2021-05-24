import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';
import newsReducer from './news-reducer';

const reducersBatch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
    news: newsReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersBatch, composeEnhancers(
    applyMiddleware(thunkMiddleWare)
    ) 
);

window.store = store;

export default store;