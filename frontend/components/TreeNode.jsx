// components/TreeNode.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNode } from '../store/treeSlice';

const TreeNode = ({ node }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(node.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    dispatch(updateNode({ id: node.id, value }));
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="number"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <span onClick={handleClick}>{node.value}</span>
      )}
    </div>
  );
};

export default TreeNode;
