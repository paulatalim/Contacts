import { VIEW_IDENTY } from '../actions/actionTypes';

const initState = {
    identy: {
        id: -1,
        name: '',
        pronome: '',
        genero: '',
        idade: -1,
        caracteristica: '',
        descricao: '',
        photo: '',
    },
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case VIEW_IDENTY:
            return {
                ...state,
                identy: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
