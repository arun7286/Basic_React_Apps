import React, {useState} from 'react';
import Payment from './Payment'
export default function Cart({user}) {
    const [click, setClick] = useState(false);
    if(click) {
        return (<Payment user = {user} />)
    }
    return (
        <>
            <h1>Cart Component</h1>
            <h3>{user.username}</h3>
            <h3>{user.balance}</h3>

            <button onClick = {()=> {setClick(true)}}>Payment</button>
        </>
    )
}