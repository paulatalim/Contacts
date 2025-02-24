import { VIEW_CONTACT } from './action-types';

export const changeActualIdenty = contact => {
    return {
        type: VIEW_CONTACT,
        payload: contact,
    };
};
