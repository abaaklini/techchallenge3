import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    hasError: false,
}

type ActionType = {
    type: string;
    payload?: any;
}
const reducer = (state = initialState, action:ActionType) => {
    const { type, payload } = action
    switch (type) {
        case 'error':
            return {
                ...state,
                hasError: payload,
            }
        default:
            return state
    }
}

export const reduxStorage = configureStore({
    reducer: {
        error: reducer,
    },
})