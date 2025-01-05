import { createStore } from 'redux';

const initialState = {
    user : {
        username : "AK",
        balance : 25000
    }
}
export const updateWallet = (amt) => ({
    type : "UPDATE_WALLET",
    payload : amt
})



function reducer (state = initialState, action) {
    switch (action.type) {
        case "UPDATE_WALLET":
            return {
                user : {
                    username : state.user.username,
                    balance : (state.user.amount - action.payload)
                }
            };
        default:
            return state;
    }
}
const storage = createStore(reducer);
export default storage;

