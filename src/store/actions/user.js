import { SET_USER, USER_LOGGED_OUT } from './actionTypes';
import axios from 'axios';

export const logout = () => {
    return {
        type: USER_LOGGED_OUT,
    };
};

export const singup = user => {
    return dispatch => {
        axios.get('/user.json')
            .catch(err => console.log(err))
            .then(res => {
                const rawUser = res.data || [];

                if (Object.values(rawUser).filter(users => users.email === user.email).length === 0) {
                    axios.post('/user.json', { ...user })
                        .catch(err => console.log(err))
                        .then(() => {
                            axios.get('/user.json')
                                .catch(err => console.log(err))
                                .then(result => {
                                    const users = result.data;

                                    for (let key in users) {
                                        if (users[key].email === user.email) {
                                            dispatch(setUser({ ...users[key], id: key}));
                                            break;
                                        }
                                    }
                                });
                    });
                } else {
                    fetchUser(user);
                }
            });
    };
};

export const setUser = user => {
    return {
        type: SET_USER,
        payload: user,
    };
};

export const fetchUser = user => {
    return dispatch => {
        axios.get('/user.json')
            .catch(err => console.log(err))
            .then(res => {
                if (user.id !== 0) {
                    dispatch(setUser({...res.data[user.id], id: user.id}));
                }

                const rawUser = res.data;

                for (let key in rawUser) {
                    if (rawUser[key].email === user.email) {
                        dispatch(setUser({ ...rawUser[key], id: key}));
                        break;
                    }
                }
            });
    };
};
