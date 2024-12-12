import React from 'react'
import TodoItem from '../TodoItem'
import styles from '../css/todoList.module.css'

function TodoItemList({todos,setTodos}) {
  return (
    <>
    <div className={styles.todoDiv} >
       {todos.map((item)=>{
         return <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
        })}
    </div>
    </>
  )
}

export default TodoItemList
