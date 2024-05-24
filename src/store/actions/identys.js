import { ADD_IDENTY, EDIT_IDENTY } from './actionTypes';

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
