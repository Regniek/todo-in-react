import './css/App.css';
import React from 'react';
import { AppUI } from './componentsUI/App';


const defaultTodos = [
  {text: 'cortar cebolla', completed: true},
  {text: 'Tomar el curso de intro de react', completed: false},
  {text: 'llorar con la llorona', completed: true},
  { text: 'LALALALAA', completed: false },
]

function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed ).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  };

  return (
    <AppUI
    total={totalTodos}
    completed={completedTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
  );
}

export default App;
