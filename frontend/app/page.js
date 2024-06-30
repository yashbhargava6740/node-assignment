// pages/index.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Tree from '../components/Tree';
import UsernameInput from '../components/UsernameInput';

const Home = () => {
  const tree = useSelector((state) => state.tree);
  const username = useSelector((state) => state.user.username);

  return (
    <div>
      <h1>Tree Structure Application</h1>
      {!username ? <UsernameInput /> : <Tree tree={tree} />}
    </div>
  );
};

export default Home;
