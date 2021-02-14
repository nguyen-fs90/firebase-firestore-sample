import {useEffect, useState} from 'react';
import './App.css';
// import {db} from './Firebase';

// const document = db.collection('todo-app').doc('todo-list'); 

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log('is effect !');
  }, []);

  const onChange = (e) => {
    const newTask = e.target.value;
    setTask(newTask);
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
        <input type="text" className="input-style" onChange={onChange} value={task}></input>
        <button type="button" className="btn" onClick={addTodo}>add</button>
        <ul>
          {todoList.map((todo) => <li key={todo}>{todo}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
