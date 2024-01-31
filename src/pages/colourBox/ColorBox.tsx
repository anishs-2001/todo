import React, { useReducer, useState } from 'react';

const colorReducer = (state: { [key: number]: string }, action: { payload: { id: number, color: string } }) => {
    return { [action.payload.id]: action.payload.color }
}

const ColorBox = () => {
    const [num, setNum] = useState<number>(1);
    const [color, setColor] = useState('');

    const initialValue = { 0: '' };
    const [state, dispatch] = useReducer(colorReducer, initialValue);

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", }}>
                {Array.from({ length: 6 }, (_, i) => (
                    <div key={i + 1} style={{ width: "18rem", height: "8rem", backgroundColor: state[i + 1], border: "2px solid #000", margin: '10px' }}>
                    </div>
                ))}
            </div>
            <br /><br />
            <label>Enter the box number:  </label>
            <input type="number" onChange={(e) => setNum(parseInt(e.target.value))} /><br /><br />
            <label>Enter the box color: </label>
            <input type="text" onChange={(e) => setColor(e.target.value)} />
            <button style={{ marginLeft: "20px" }} onClick={() => dispatch({ payload: { id: num, color: color } })}> submit</button>
        </>
    )
}

export default ColorBox;
