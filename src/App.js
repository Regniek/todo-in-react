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

