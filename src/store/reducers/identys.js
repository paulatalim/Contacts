import { ADD_IDENTY, EDIT_IDENTY, DELETE_IDENTY } from '../actions/actionTypes';

const initState = {
    identys: [{
        id: 1,
        name: 'Alice',
        pronome: 'Ela/dela',
        genero: 'Feminino',
        idade: 19,
        caracteristica: 'Extrovertida',
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        photo: 'https://picsum.photos/300?random=5.jpg',
    },
    {
        id: 2,
        name: 'Paulo',
        pronome: 'Ele/dele',
        genero: 'Masculino',
        idade: 19,
        caracteristica: 'Timido',
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        photo: 'https://picsum.photos/300?random=1.jpg',
    },
    {
        id: 3,
        name: 'Luy',
        pronome: 'Ele/dele',
        genero: 'Masculino',
        idade: 19,
        caracteristica: 'Amor',
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        photo: 'https://picsum.photos/300?random=2.jpg',
    },
    {
        id: 4,
        name: 'Ana',
        pronome: 'Ela/dela',
        genero: 'Feminino',
        idade: 19,
        caracteristica: 'Legal',
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        photo: 'https://picsum.photos/300?random=3.jpg',
    },
    {
        id: 5,
        name: 'Alan',
        pronome: 'Elu/delu',
        genero: 'Neutro',
        idade: 19,
        caracteristica: 'Esquisito',
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        photo: '',
    }],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_IDENTY:
            return {
                ...state,
                identys: state.identys.concat({...action.payload}),
            };
        case EDIT_IDENTY:
            return {
                ...state,
                // identys: () => {
                //     const newIdentys = [...state.identys];
                //     newIdentys[action.payload.id - 1] = action.payload;
                //     return newIdentys;
                // },
                identys: state.identys.map(item => item.id === action.payload.id ? action.payload : item),
            };
        case DELETE_IDENTY:
            return {
                ...state,
                identys: state.identys.filter(identy => identy.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;
