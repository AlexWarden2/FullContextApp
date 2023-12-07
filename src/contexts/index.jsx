import React, { useState, useContext, createContext, useEffect } from "react"

const TodoContext = createContext()
const StatusContext = createContext()
const InputContext = createContext()
const FilterContext = createContext()

export const TodoProvider = ({ children }) => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

      // const [inputText, setInputText] = useState('');
  
//   const { todos, setTodos } = useTodo();
//   // const [ todos, setTodos ]= useState([])
//   const [status, setStatus] = useState('all');
//   const [filteredTodos, setFilteredTodos] = useState([]);
  
    useEffect(() => {
        filterHandler()
    }, [status, todos])

    function filterHandler() {
        if(status === 'completed') {
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        } else if (status === 'uncompleted') {
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        } else {
        setFilteredTodos(todos);
        }
    }

  return (
    <>
    <FilterContext.Provider value={{ filteredTodos, setFilteredTodos }}>
        <TodoContext.Provider value={{ todos, setTodos }}>
            <StatusContext.Provider value={{ status, setStatus }}>
                <InputContext.Provider value={{ inputText, setInputText }}>
                    {children}
                </InputContext.Provider>
            </StatusContext.Provider>
        </TodoContext.Provider>
    </FilterContext.Provider>
    </>
  );
};

export const useTodo = () => useContext(TodoContext)
export const useStatus = () => useContext(StatusContext)
export const useInput = () => useContext(InputContext)
export const useFilter = () => useContext(FilterContext)
