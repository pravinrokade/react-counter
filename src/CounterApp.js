import React from 'react'
import { useState } from 'react';

function CounterApp() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Counter App</h1>
        <p>Count : {count}</p>
        <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </div>
    </div>
  )
}

export default CounterApp