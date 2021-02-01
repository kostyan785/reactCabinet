// Node
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from "redux-thunk";
// Reducers
import authReducer      from './reducers/auth-reducer';
import loadReducer      from './reducers/load-reducer';

let reducers = combineReducers({
    authStore:      authReducer,
    loadStore:      loadReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;