import React, { useEffect, useState } from 'react'
import AddTodo from '../AddTodo'
import Todoo from '../Todoo'
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => {
    setTodos([...todos, todo])
  }

  const handleUpadate = (updated) => {
    setTodos(todos.map((t) =>(t.id === updated.id ? updated : t)))
  }

  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id))
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const filtered = getFilterItems(todos, filter)

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => 
          <Todoo
            key={item.id} 
            todo={item} 
            onUpdate={handleUpadate} 
            onDelete={handleDelete} 
          />
        )}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  )
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [] ;
}

function getFilterItems(todos, filter) {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter)
}