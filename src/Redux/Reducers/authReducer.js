import { SIGNED_IN, SIGNED_OUT, TOKEN_LOGIN, REGISTER } from "../Actions/Types"
const initaialState = {
    signedIn: false,
    user: null,
    errors: ''
}
export default (state = initaialState, action) => {
    switch (action.type) {
        case SIGNED_IN:
            return Object.assign({}, state, {
                signedIn: true,
                user: action.payload.user,
                errors: action.payload.errors
            })
        case SIGNED_OUT:
            return {
                ...state,
                signedIn: false,
            }
        case REGISTER:
            return {
                ...state,
                user: action.payload.user,
                errors: action.payload.errors
            }
        default:
            return state
    }
}