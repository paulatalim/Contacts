import { EDIT_IDENTY, DELETE_IDENTY } from './actionTypes';
import { fetchUser } from './user';
import axios from 'axios';

export const addIdenty = identy => {
// axios({
//     url: 'uploadImage',
//     baseURL: '',
//     method: 'post',
//     data: {
//         image: identy.photo
//     }
// })
// .catch(err => console.log(err))


    return dispatch => {
        axios.get(`/user/${identy.id}.json`)
            .catch(err => console.log(err))
            .then(res => {
                const identys = res.data ? res.data.identys || [] : [];
                identys.push(identy.identy);
                axios.patch(`/user/${identy.id}.json`, { identys })
                    .catch(err => console.log(err))
                    .then(result => dispatch(fetchUser(identy)));
            });
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
