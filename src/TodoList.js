//This is a component
//This component goes into the app.js

import React from 'react'
import Todo from './Todo'


export default function TodoList({todos}) {
    return (
       
          todos.map(todo => {
            return <Todo key={todo} todo ={todo}/>

          })
        
    )
}
