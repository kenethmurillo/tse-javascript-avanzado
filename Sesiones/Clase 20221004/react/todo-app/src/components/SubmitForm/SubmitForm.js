import React from 'react';
import './SubmitForm.css';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

export default FormTodo;
