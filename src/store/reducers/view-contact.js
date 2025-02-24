import { VIEW_CONTACT } from '../actions/action-types';

const initState = {
    contact: {
        id: -1,
        name: '',
        photo: '',
        number: '',
        email: '',
    },
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case VIEW_CONTACT:
            return {
                ...state,
                CONVIEW_CONTACT: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
