// pages/index.jsx
"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tree from '../components/Tree';
import UsernameInput from '../components/UsernameInput';
import { saveTree, getTree } from '../utils/api';
import { setTree } from '../store/treeSlice';

const Home = () => {
  const tree = useSelector((state) => state.tree);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleSave = async () => {
    try {
      await saveTree(username, tree);
      alert('Tree saved successfully');
    } catch (error) {
      alert('Failed to save tree');
    }
  };

  React.useEffect(() => {
    const fetchTree = async () => {
      if (username) {
        const savedTree = await getTree(username);
        if (savedTree) {
          dispatch(setTree(savedTree));
        }
      }
    };
    fetchTree();
  }, [username, dispatch]);

  return (
    <div>
      <h1>Tree Structure Application</h1>
      {!username ? (
        <UsernameInput />
      ) : (
        <>
          <Tree tree={tree} />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
};

export default Home;
