import { VIEW_IDENTY } from './actionTypes';

export const changeActualIdenty = identy => {
    return {
        type: VIEW_IDENTY,
        payload: identy,
    };
};
