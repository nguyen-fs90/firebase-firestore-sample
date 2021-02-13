import {useEffect, useState} from 'react';
import './App.css';
// import {db} from './Firebase';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log('is effect !');
  }, []);

  const onChange = (e) => {
    setTask(e.target.value);
  }

  const addTodo = () => {
    setTodoList([...todoList, task]);
    setTask('');
  }

  return (
    <div className="todo-app">
      <div className="header">
        <h3>Todo List</h3>
      </div>
      <div className="container">
        <input type="text" onChange={onChange} value={task}></input>
        <button type="button" onClick={addTodo}>add</button>
        <ul>
          {todoList.map((todo) => <li key={todo}>{todo}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
