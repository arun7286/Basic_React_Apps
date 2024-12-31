import React, {useState} from 'react';

export default function Payment({user}) {
    const [click, setClick] = useState(false);
    if(click) {
        return (
            <div>
                <h1>Payment Successful</h1>
                <h2>Order Placed</h2>
                <h3>User Name: {user.username}</h3>

                <h3>Wallet Balance: {user.balance - 2500}</h3>
            </div>
        )
    }
    return (
        <div>
            <h2>{user.username}, {user.balance}</h2>
            <h3>Cart Value: 2500/-</h3>
            <button onClick={() => {
                setClick(true)
            }}> Pay Now
            </button>
        </div>
    )

}