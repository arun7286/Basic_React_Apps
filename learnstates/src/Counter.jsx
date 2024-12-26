import React from "react";
import { useState } from "react";
export default function Counter() {
    const [count, setCount] =useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{ count }</h1>
            <button onClick = {increase}>+</button>
            <button onClick  = {() => {setCount(count-1)}}>-</button>
            <br></br><br></br>
            <button onClick = {() => {setCount(0)}}>Reset</button>
        </div>
    )
}