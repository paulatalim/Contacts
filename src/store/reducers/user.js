import {
    USER_LOGGED_OUT,
    SET_USER,
} from '../actions/actionTypes';

const initState = {
    id: 0,
    name: null,
    email: null,
    identy: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                identy: action.payload.identys,
            };
        case USER_LOGGED_OUT:
            return {
                ...state,
                id: null,
                name: null,
                email: null,
                identy: null,
            };
        default:
            return state;
    }
};

export default reducer;
