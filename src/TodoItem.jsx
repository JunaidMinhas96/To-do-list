import React from 'react'
import styles from './css/todoItem.module.css'


function TodoItem({item ,todos ,setTodos}) {
  const deleteBtn = (item)=>{
    
    setTodos(todos.filter((todo)=> todo !==item))
  }
  const doneItem = (name) =>{
     console.log('item clicked',name)
    const newTodos =  todos.map((todo)=>{
      return todo.name === name? {...todo,done:!todo.done} : todo
     })
     setTodos(newTodos)
  }
  const completed = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div  className={styles.itemDiv}>
        <span className={`${completed}`} onClick={()=>doneItem(item.name)}>{item.name}</span>
        <button onClick={()=>deleteBtn(item)} className={styles.crossBtn}>X</button>
      </div>
      <hr className={styles.line} />
    </div>
  )
}

export default TodoItem
