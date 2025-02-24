import { VIEW_CONTACT } from './action-types';

export const changeActualContact = contact => {
    return {
        type: VIEW_CONTACT,
        payload: contact,
    };
};
