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

export const addContact = contact => {
    return dispatch => {
        axios.get(`/user/${contact.id}.json`)
            .catch(err => console.log(err))
            .then(async res => {
                const contacts = res.data ? res.data.contacts || [] : [];

                if (contact.contact.photo !== '') {
                    const img_url = await uploadImageToStorage(contact.contact.photo);
                    contacts.push({...contact.contact, photo: img_url});
                } else {
                    contacts.push(contact.contact);
                }

                axios.patch(`/user/${contact.id}.json`, { contacts })
                    .catch(err => console.log(err))
                    .then(() => dispatch(fetchUser(contact)));
            });
    };
};

export const editContact = contact => {
    return dispatch => {
        axios.get(`/user/${contact.id}.json`)
            .catch(err => console.log(err))
            .then(async res => {
                let contacts = res.data ? res.data.contacts || [] : [];
                const contacteditphoto = contacts.filter(item => item !== null && item.id === contact.contact.id)[0].photo;

                if (contact.contact.photo !== contacteditphoto) {
                    if (contacteditphoto !== '') {
                        deleteImageStorage(contacteditphoto);
                    }

                    if (contact.contact.photo !== '') {
                        const img_url = await uploadImageToStorage(contact.contact.photo);
                        contacts = contacts.map(item => item !== null && item.id === contact.contact.id ? {...contact.contact, photo: img_url} : item);
                    } else {
                        contacts = contacts.map(item => item !== null && item.id === contact.contact.id ? {...contact.contact, photo: ''} : item);
                    }
                } else {
                    contacts = contacts.map(item => item !== null && item.id === contact.contact.id ? contact.contact : item);
                }

                axios.patch(`/user/${contact.id}.json`, { contacts })
                    .catch(err => console.log(err))
                    .then(() => dispatch(fetchUser(contact)));
            });
    };
};

export const deleteContact = contact => {
    return dispatch => {
        axios.get(`/user/${contact.id}.json`)
            .catch(err => console.log(err))
            .then(async res => {
                let contacts = res.data ? res.data.contacts || [] : [];

                if (contact.contact.photo !== '') {
                    deleteImageStorage(contacts.filter(item => item !== null && item.id === contact.contact.id)[0].photo);
                }

                contacts = contacts.filter(item => item !== null && item.id !== contact.contact.id);
                axios.patch(`/user/${contact.id}.json`, { contacts })
                    .catch(err => console.log(err))
                    .then(() => dispatch(fetchUser(contact)));
            });
    };
};
