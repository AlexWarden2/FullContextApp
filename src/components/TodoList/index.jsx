import React from 'react'
import TodoItem from "../TodoItem";
import { useTodo, useFilter } from '../../contexts'

function TodoList() {
	
  	const { todos, setTodos } = useTodo()
	const { filteredTodos, setFilteredTodos } = useFilter()

	function deleteTodo(todo) {
		let filteredTodos = todos.filter(el => el !== todo);
		setTodos(filteredTodos);
	}

	function completeTodo(todo) {
		setTodos(todos.map((item) => {
			if(item === todo) {
				return {
					...item, completed: !item.completed
				}
			}
			return item;
		}))
	}

	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo, i) => <TodoItem todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} key={i} />)}
			</ul>
		</div>
	)
}

export default TodoList;
