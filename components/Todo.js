import React from 'react';


const Todo = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'darkblue' }}>My To-Do List</h1>

      
      <input type="text" placeholder="Add a new task..." style={{ padding: '5px', width: '300px' }} />

      
      <button style={{
        padding: '5px 10px',
        backgroundColor: 'darkblue',
        color: 'white',
        border: 'none',
        marginLeft: '10px'
      }}>Add</button>

      {/* Task List */}
      <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '20px' }}>
        
        <li style={{ padding: '5px' }}>Deepak Task 1</li>
        <li style={{ padding: '5px' }}>Deepak Task 2</li>
      </ul>
    </div>
  );
}

export default Todo;
