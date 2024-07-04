import './App.css';
import { TodoProvider } from './context/TodoContext';
import Todo from './pages/todo/Todo';

function App() {
  return (
    <div className='App'>
      <TodoProvider>
      <Todo/>
      </TodoProvider>
    </div>
  
  )
}

export default App;
