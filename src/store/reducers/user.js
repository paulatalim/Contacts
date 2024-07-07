import {
    USER_LOGGED_OUT,
    ADD_IDENTY,
    EDIT_IDENTY,
    DELETE_IDENTY,
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
        case ADD_IDENTY:
            return {
                ...state,
                identy: state.identy.concat({...action.payload}),
            };
        case EDIT_IDENTY:
            return {
                ...state,
                identy: state.identy.map(item => item.id === action.payload.id ? action.payload : item),
            };
        case DELETE_IDENTY:
            return {
                ...state,
                identy: state.identy.filter(identy => identy.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;
