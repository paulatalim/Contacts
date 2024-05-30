import { ADD_IDENTY, EDIT_IDENTY, DELETE_IDENTY } from './actionTypes';

export const addIdenty = identy => {
    return {
        type: ADD_IDENTY,
        payload: identy,
    };
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
