// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import treeReducer from './treeSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    tree: treeReducer,
  },
});

export default store;
