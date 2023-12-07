import React from 'react'
import { useTodo, useStatus, useInput } from '../../contexts'

const TodoForm = () => {

  const { inputText, setInputText } = useInput()
  const { todos, setTodos } = useTodo()
  const { setStatus } = useStatus()

  function handleInput(e) {
    // console.log(e.target.value)
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
     ...todos,
     {text: inputText, completed: false}
    ])
    setInputText('')
  }
    
  function handleStatus(e) {
    // console.log(e.target.value)
    setStatus(e.target.value)
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputText} type="text" className="todo-input" onChange={handleInput} />
      <button type="submit" className="todo-button">Add</button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default TodoForm;
