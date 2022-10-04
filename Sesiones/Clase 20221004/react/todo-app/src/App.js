import React from "react";
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }} >{todo.text}</span>
      <div>
        <Button variant="success" onClick={() => markTodo(index)}>✓</Button>
        <Button variant="danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const submitEvt = e => {
    e.preventDefault();

    if (!value) return;

    addTodo(value);
    setValue("");
  };

  return (
    <div className="row">
      <Form onSubmit={submitEvt}>
        <Form.Group>
          {/* <Form.Label>Add Todo</Form.Label> */}
          <Form.Control
            type="text"
            className="col-10 input"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Add new todo" ></Form.Control>
        </Form.Group>
        <Button className="col-2" variant="primary mb-3" type="submit">Add</Button>
      </Form>
    </div>
  );
}

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
