import { TYPING_UPDATE_VALUE } from '../actions'

const initialState = {
    newValue: null,
    error: false,
  }

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPING_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue,
                error: action.error,
            }
        default:
            return state
    }
};