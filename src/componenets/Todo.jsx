import React, { useState } from 'react'

import Form from './Form'
import TodoItemList from './TodoItemList'

function Todo() {
    
    const [todos,setTodos] = useState([])
   
  return (
    <>
       <Form todos={todos} setTodos={setTodos}/>
       <TodoItemList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default Todo
