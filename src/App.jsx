import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { TodoForm, TodoList } from './components';

function App() {

  return (  
  <>
        <Routes>
          <Route path="/" element={    
            <div>
              <header>Sarah's Todo List</header>
                  <TodoForm />
                  <TodoList />
            </div>}>
          </Route>
          <Route 
          path="*" 
          element={<h1>404: {location.pathname} page does not exist</h1>} 
          />
        </Routes>
  </>
  );
}

export default App;
