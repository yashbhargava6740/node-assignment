// utils/treeGenerator.js
export const generateTree = (depth, value = 1) => {
    const createNode = (level) => {
      if (level > depth) return null;
      const node = { id: `${level}-${Math.random()}`, value, children: [] };
      node.children.push(createNode(level + 1));
      return node;
    };
  
    return createNode(1);
  };
  