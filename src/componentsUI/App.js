import React from "react";

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../components/TodoContext';
import { Modal } from '../components/Modal';
import { TodoForm } from "../components/TodoForm";
import { TodoHeader } from "../components/TodoHeader";

function AppUI(){

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
        setSearchValue
    } = React.useContext(TodoContext);
    
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
        <TodoList>
            {error && <p>Error desconocido, desesperate...</p>}
            {loading && <p>Estamos cargando...</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
            {searchedTodos.map(todo =>(
            <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted ={() => { completeTodo(todo.text) } }
                onDelete ={() => { deleteTodo(todo.text) } }
            />
            ))}
        </TodoList>
        {!!openModal && ( 
            <Modal>
                <TodoForm />
            </Modal>
        )}
        <CreateTodoButton 
            setOpenModal = { setOpenModal }
        />
        </React.Fragment>
    );
}

export { AppUI };