import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import styles from './AddTodo.module.css';

export default function AddTodo({onAdd}) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    if( text.trim().length === 0) {
      return
    }
    event.preventDefault();
    onAdd({id: uuidv4(), text: text, status: 'active'})
    setText('');
  }

  const handleChange = (event) => { setText(event.target.value) }

  return (
    <form className={styles.form} 
      onSubmit={handleSubmit}>
      <input className={styles.input}
        type="text"
        placeholder='  Add Todo'
        value={text}
        onChange = {handleChange}
        ></input>
      <button className={styles.btn}>Add</button> 
    </form>
  )
}
