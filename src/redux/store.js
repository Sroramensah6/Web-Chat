import thunk from 'redux-thunk'
import {combineReducers} from "redux"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from "@reduxjs/toolkit"

import { messagesReducer } from '../features'

const reducers = combineReducers({
    messages: messagesReducer
});

const persistConfig = {
    key: 'root',
    storage
};
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
