// store/treeSlice.js
// "use client"
import { createSlice } from '@reduxjs/toolkit';
import { generateTree } from '../utils/treeGenerator';

const treeSlice = createSlice({
  name: 'tree',
  initialState: generateTree(10),
  reducers: {
    setTree: (state, action) => {
      return action.payload;
    },
    updateNode: (state, action) => {
      const update = (node) => {
        if (node.id === action.payload.id) {
          node.value = action.payload.value;
        } else if (node.children) {
          node.children.forEach(update);
        }
      };
      update(state);
    },
  },
});

export const { setTree, updateNode } = treeSlice.actions;
export default treeSlice.reducer;
