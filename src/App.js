import './css/App.css';
import React from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal';
import { TodoForm } from "./components/TodoForm";
import { TodoHeader } from "./components/TodoHeader";
import { TodosError } from './components/TodosError';
import { TodosLoading } from './components/TodosLoading';
import { EmptyTodos } from './components/EmptyTodos';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
} = useTodos();
  
  return (
      <React.Fragment>
      <TodoHeader>
          <TodoCounter
              totalTodos = {totalTodos} 
              completedTodos = {completedTodos}
          />
          <TodoSearch
              searchValue = {searchValue}
              setSearchValue = {setSearchValue}
          />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        
        onError = {() => <TodosError />}
        onLoading = {() => <TodosLoading />}
        onEmptyTodos = {() => <EmptyTodos />}
        render = {todo =>(
            <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted ={() => { completeTodo(todo.text) } }
                onDelete ={() => { deleteTodo(todo.text) } }
            />
            )}
      />

      {!!openModal && ( 
          <Modal>
              <TodoForm 
                addTodo = {addTodo}
                setOpenModal = {setOpenModal}
              />
          </Modal>
      )}
      <CreateTodoButton 
          setOpenModal = { setOpenModal }
      />
      </React.Fragment>
  );
}

export default App;

