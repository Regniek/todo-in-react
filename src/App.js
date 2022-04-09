import './css/App.css';
import React from 'react';
import { AppUI } from './componentsUI/App';
import { TodoProvider } from './components/TodoContext';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;


// const defaultTodos = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'Tomar el curso de intro de react', completed: false},
//   {text: 'llorar con la llorona', completed: true},
//   { text: 'LALALALAA', completed: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))