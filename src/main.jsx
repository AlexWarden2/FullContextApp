import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import { TodoProvider } from './contexts';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <TodoProvider>
        <App />
      </TodoProvider>
    </Router>
  </React.StrictMode>,
)
