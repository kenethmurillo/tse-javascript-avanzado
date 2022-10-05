import React from "react";
import './App.css';
import Todo from './components/TaskList/TaskList';
import FormTodo from './components/SubmitForm/SubmitForm'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todos, setTodos] = React.useState([{
    text: 'Tarea de ejemplo',
    isDone: false
  }]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    let todo = newTodos[index];
    todo.isDone = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>To-do List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo} />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

}

export default App;
