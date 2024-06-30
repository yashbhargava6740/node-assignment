// components/TreeNode.jsx
import React from 'react';

const TreeNode = ({ node }) => {
  return (
    <div>
      <span>{node.value}</span>
    </div>
  );
};

export default TreeNode;
