import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Display from './Display';

const InputForm = () => {
    const [name, setName] = useState('');
    const nameRef = useRef(null);

    const [age, setAge] = useState();
    const ageRef = useRef(null);

    const [number, setNumber] = useState();
    const numberRef = useRef(null);

    const submit = () => {
        nameRef?.current && setName(nameRef?.current["value"]);
        ageRef?.current && setAge(ageRef?.current["value"])
        numberRef?.current && setNumber(numberRef?.current["value"])
    }

    // useEffect(() => {
    //     console.log("rendered")
    // }, [name, age, number]);

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control type='text' id="name" ref={nameRef} />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="age">Age:</Form.Label>
                    <Form.Control type='number' id="age" ref={ageRef} />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="phoneNumber">Phone number:</Form.Label>
                    <Form.Control type='number' id="phoneNumber" ref={numberRef} />
                </Form.Group>
                <Button variant='success' onClick={submit}> CLICK ME</Button>
            </Form>
            <Display name={name} age={age} number={number}></Display >
        </>
    );
};

export default InputForm;
