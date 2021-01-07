import React, { useReducer } from 'react'
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return state = 0;
        default:
            return state
    }
}

const CounterReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div style={{ height: '200px', width: '600px', border: '1px solid red', background: '#e1f5fe', margin: '20px' }}>
            <p>Reducer Example</p>
            <h3>{count}</h3>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}
export default CounterReducer;
