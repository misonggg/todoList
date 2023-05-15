import React from 'react'
import { FaTimes } from 'react-icons/fa';
import styles from './Todo.module.css'

export default function Todoo({id, todo, onUpdate, onDelete}) {
  const {text, status} = todo;
  const handleChange = (event) => {
    onUpdate({...todo, status: event.target.checked ? 'completed' : 'active'})
  }
  const handleDelete = () => onDelete(todo)

  return ( 
    <li className={styles.todo}>
      <input className={styles.checkbox} type='checkbox' id={id} checked={todo.status === 'completed'} onChange={handleChange}/>
      <label className={styles.text} htmlFor={id}>{todo.text}</label>
      <span className={styles.icon}>
        <button className={styles.delete} onClick={handleDelete} ><FaTimes /></button>
      </span>
    </li>
  )
}
