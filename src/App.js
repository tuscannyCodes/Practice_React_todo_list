//main app component to render entire app

import React, { useState } from 'react';
import TodoList from './TodoList';
function App() {
  const [todos,setTodos]= useState(['Todo 1','Todo 2'])
  return (
<>
  
    <input type="text"/>
    <button>Add Todo</button>
    <button>Clear Complete</button>
    <TodoList todos = {todos}/>
    <div>0 left to do</div>
</>
  )
}

export default App;
