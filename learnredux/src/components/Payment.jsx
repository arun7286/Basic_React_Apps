import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {updateWallet} from "../Store";

export default function Payment() {
    const data = useSelector(state=> state.user)
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(updateWallet(5000));
    };
    return (
        <div>
            <h1>Payment</h1>
            <h2>{data.username}, {data.balance}</h2>
            <button onClick={handleClick}>PAY</button>
        </div>
    )
}