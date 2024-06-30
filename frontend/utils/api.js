// utils/api.js
export const registerUser = async (username) => {
    console.log(username);
    await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
  };
export const saveTree = async (username, tree) => {
    const response = await fetch('http://localhost:3000/user/saveTree', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, tree }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to save tree');
    }
  
    return response.json();
  };
  
  export const getTree = async (username) => {
    const response = await fetch(`http://localhost:3001/user/getTree/${username}`);
  
    if (!response.ok) {
      throw new Error('Failed to get tree');
    }
  
    return response.json();
  };
  