import React from "react";
import './TaskList.css';
import { Button } from 'react-bootstrap';
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

export default Todo;