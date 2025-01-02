import React, {useState} from 'react';
import Cart from './Cart';
export default function Shopping({user}) {

    const [click, setClick] = useState(false);

    if(click) {
        return (<Cart user = {user} />)
    }

    return (
        <>
            <h1>Shopping Component</h1>
            <h3>{user.username}</h3>
            <h3>{user.balance}</h3>

            <button onClick={()=> {setClick(true)}}>Cart</button>
        </>
    )
}