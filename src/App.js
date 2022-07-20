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
import { ChangeAlertWithStorageListener } from './components/ChangeAlert/ChangeAlert';

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
		addTodo,
		sincronizeTodos
	} = useTodos();

	return (
		<React.Fragment>
			<TodoHeader
				loading={loading}
			>
				<TodoCounter
					totalTodos={totalTodos}
					completedTodos={completedTodos}
				/>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				totalTodos={totalTodos}
				searchText={searchValue}

				onError={() => <TodosError />}
				onLoading={() => <TodosLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				onEmptySearchResult={(searchText) => <p>No hay resultados para {searchText}</p>}
			// render = {todo =>(
			//     <TodoItem 
			//         key={todo.text}
			//         text={todo.text}
			//         completed={todo.completed}
			//         onCompleted ={() => { completeTodo(todo.text) } }
			//         onDelete ={() => { deleteTodo(todo.text) } }
			//     />
			//     )}


			>
				{todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onCompleted={() => { completeTodo(todo.text) }}
						onDelete={() => { deleteTodo(todo.text) }}
					/>
				)}
			</TodoList>

			{!!openModal && (
				<Modal>
					<TodoForm
						addTodo={addTodo}
						setOpenModal={setOpenModal}
					/>
				</Modal>
			)}
			<CreateTodoButton
				setOpenModal={setOpenModal}
			/>

			<ChangeAlertWithStorageListener
				sincronize = { sincronizeTodos }
			/>
		</React.Fragment>
	);
}

export default App;

