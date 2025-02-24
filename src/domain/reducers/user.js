import {
    USER_LOGGED_OUT,
    SET_USER,
} from '../actions/action-types';

const initState = {
    id: 0,
    name: null,
    email: null,
    contacts: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                contacts: action.payload.contacts,
            };
        case USER_LOGGED_OUT:
            return {
                ...state,
                id: null,
                name: null,
                email: null,
                contacts: null,
            };
        default:
            return state;
    }
};

export default reducer;
