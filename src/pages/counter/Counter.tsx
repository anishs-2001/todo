import React, { useReducer, useState } from 'react'
import { Button } from 'react-bootstrap'

const countReducer = (state: { count: number }, action: { type: string, payload: number }) => {
    if (action.type === 'increment') {
        return { count: state.count + action.payload };
    }
    else if (action.type === 'decrement') {
        return { count: state.count - action.payload };
    }
    else if (action.type === 'multiply') {
        return { count: state.count * action.payload };
    }
    else if (action.type === 'division') {
        return { count: state.count / action.payload };
    }
    return { ...state };

}

const Counter = () => {
    const initialValue = { count: 0 };
    const [state, dispatch] = useReducer(countReducer, initialValue);
    const [input, setInput] = useState<number>(0);
    return (
        <>
            <h1>{state.count}</h1>
            <input type='number' onChange={(e) => setInput(parseInt(e.target.value))}></input>
            <Button variant='primary' onClick={() => dispatch({ type: 'increment', payload: input })}>+</Button>
            <Button variant='success' onClick={() => dispatch({ type: 'decrement', payload: input })}>-</Button>
            <Button variant='danger' onClick={() => dispatch({ type: 'multiply', payload: input })}>*</Button>
            <Button variant='warning' onClick={() => dispatch({ type: 'division', payload: input })}>/</Button>
        </>
    )
}

export default Counter
