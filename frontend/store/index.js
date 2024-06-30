// store/index.js
// "use client"
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
