import { fetchUser } from './user';
import storage from '@react-native-firebase/storage';
import axios from 'axios';

const uploadImageToStorage = async (uri) => {
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const task = storage().ref(filename).putFile(uri);

    try {
        await task;
        const url = await storage().ref(filename).getDownloadURL();
        return url;
    } catch (e) { console.error(e); }

    return null;
};

const deleteImageStorage = url => {
    const uri = url.substring(0, url.indexOf('?'));
    storage().refFromURL(uri).delete();
};

export const addIdenty = identy => {
    return dispatch => {
        axios.get(`/user/${identy.id}.json`)
            .catch(err => console.log(err))
            .then(async res => {
                const identys = res.data ? res.data.identys || [] : [];

                if (identy.identy.photo !== '') {
                    const img_url = await uploadImageToStorage(identy.identy.photo);
                    identys.push({...identy.identy, photo: img_url});
                } else {
                    identys.push(identy.identy);
                }

                axios.patch(`/user/${identy.id}.json`, { identys })
                    .catch(err => console.log(err))
                    .then(() => dispatch(fetchUser({identy})));
            });
    };
};

export const editIdenty = identy => {
    return dispatch => {
        axios.get(`/user/${identy.id}.json`)
            .catch(err => console.log(err))
            .then(async res => {
                let identys = res.data ? res.data.identys || [] : [];
                const identyeditphoto = identys.filter(item => item !== null && item.id === identy.identy.id)[0].photo;

                if (identy.identy.photo !== identyeditphoto) {
                    if (identyeditphoto !== '') {
                        deleteImageStorage(identyeditphoto);
                    }

                    if (identy.identy.photo !== '') {
                        const img_url = await uploadImageToStorage(identy.identy.photo);
                        identys = identys.map(item => item !== null && item.id === identy.identy.id ? {...identy.identy, photo: img_url} : item);
                    } else {
                        identys = identys.map(item => item !== null && item.id === identy.identy.id ? {...identy.identy, photo: ''} : item);
                    }
                } else {
                    identys = identys.map(item => item !== null && item.id === identy.identy.id ? identy.identy : item);
                }

                axios.patch(`/user/${identy.id}.json`, { identys })
                    .catch(err => console.log(err))
                    .then(() => dispatch(fetchUser(identy)));
            });
    };
};

export const deleteIdenty = identy => {
    return dispatch => {
        axios.get(`/user/${identy.id}.json`)
            .catch(err => console.log(err))
            .then(async res => {
                let identys = res.data ? res.data.identys || [] : [];

                if (identy.identy.photo !== '') {
                    deleteImageStorage(identys.filter(item => item !== null && item.id === identy.identy.id)[0].photo);
                }

                identys = identys.filter(item => item !== null && item.id !== identy.identy.id);
                axios.patch(`/user/${identy.id}.json`, { identys })
                    .catch(err => console.log(err))
                    .then(() => dispatch(fetchUser(identy)));
            });
    };
};
