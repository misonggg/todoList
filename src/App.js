// import { Container } from 'postcss';
import './App.css';
// import Nav from './components/Nav';
// import Container from './components/Container';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useState } from 'react';
import Todo from './components/Todoo';
import TodoList from './components/TodoList/TodoList';
import Header from './components/TodoList/Header';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed']

function App() {
  const [filter, setFilter] = useState(filters[0])

  return (
    <DarkModeProvider>
      <Header 
        filters={filters} filter={filter} onFilterChange={setFilter}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;