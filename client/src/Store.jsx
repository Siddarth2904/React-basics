import { createStore } from 'redux';

const initialState = {
    user: {
        name: 'Siddarth',
        balance: 20000
    },
}

export const updateWallet = (amt) => ({
    type: 'UPDATE_WALLET',
    payload: amt
})

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_WALLET':
            return {
                ...state,  // Good practice to spread state
                user: {
                    ...state.user,  // Spread user as well
                    balance: state.user.balance - action.payload,
                }
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;