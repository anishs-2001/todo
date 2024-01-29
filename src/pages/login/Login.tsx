import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [name, setName] = useState('');
    const navigate = useNavigate();
    const nameRef = useRef(null)

    const submit = () => {
        nameRef.current && setName(nameRef.current['value']);
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label htmlFor="name">Username:</Form.Label>
                <Form.Control type='text' id="name" ref={nameRef} />
            </Form.Group>
            <Form.Group>
                <Button type='button' variant='primary' onClick={() => navigate("tasklist")}>Login</Button>
            </Form.Group>
        </Form>
    )
}

export default Login
