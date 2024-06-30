import { ADD_IDENTY, EDIT_IDENTY, DELETE_IDENTY } from './actionTypes';
import axios from 'axios';

export const addIdenty = identy => {
    // console.log(identy)
    axios.post('/identy.json', {...identy})
        .catch(err => console.log(err))
        .then(res => console.log(res.data));
    // return {
    //     type: ADD_IDENTY,
    //     payload: identy,
    // };
};

export const editIdenty = identy => {
    return {
        type: EDIT_IDENTY,
        payload: identy,
    };
};

export const deleteIdenty = identy => {
    return {
        type: DELETE_IDENTY,
        payload: identy,
    };
};
