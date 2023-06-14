import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userRegSlice from './userRejSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import authSlice from './authSlice';
import imageSlice from './imageSlice';
import nestedTabSlice from './nestedTabSlice';
import fileImageSlice from './fileImageSlice';
import contriPathSlice from './contriPathSlice';
import subjectidSlice from './subjectidSlice';
import searchSlice from './searchSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [
    'images',
    'nestedTab',
    'fileimages',
    'contriPath',
    // 'subjectId',
  ],
};

const reducer = combineReducers({
  userReg: userRegSlice.reducer,
  auth: authSlice.reducer,
  images: imageSlice.reducer,
  fileimages: fileImageSlice.reducer,
  nestedTab: nestedTabSlice.reducer,
  contriPath: contriPathSlice.reducer,
  subjectId: subjectidSlice.reducer,
  searchText: searchSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
