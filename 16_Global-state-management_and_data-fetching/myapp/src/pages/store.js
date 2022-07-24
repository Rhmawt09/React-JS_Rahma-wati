import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer, persistStore} from 'redux-persist'
import todoSlice from "./todo";
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    todos: todoSlice
})

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({reducer:persistedReducer})
const persistor = persistStore(store)

export {store, persistor}