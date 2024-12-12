import React from 'react'
import { useState } from 'react'
import styles from "../css/form.module.css"

function Form({todos,setTodos}) {
    const [todo,setTodo] = useState({name:'',done:false})
    const inputChange = (e)=>{
        setTodo({name:e.target.value,done:false})
    }
    const userInput =(e)=>{
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo({name:'',done:false})
        
    }
  return (
    <>
    <div className={styles.formDiv}>


       <form onSubmit={userInput} >
        <input type="text" 
        className={styles.todoInput}
        placeholder='Enter your task'
        onChange={inputChange}
        value={todo.name}
         />
         <button
         className={styles.addBtn} type='Submit'>Add</button>
        </form> 
    </div>
    </>
  )
}

export default Form
