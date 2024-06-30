import React from 'react';
import TreeNode from './TreeNode';

const Tree = ({ tree }) => {
  const renderTree = (node) => {
    return (
      <div key={node.id}>
        <TreeNode node={node} />
        {node.children && node.children.map(child => renderTree(child))}
      </div>
    );
  };

  return (
    <div>
      {renderTree(tree)}
    </div>
  );
};

export default Tree;
