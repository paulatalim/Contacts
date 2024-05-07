import { legacy_createStore, combineReducers } from 'redux';
import userReduce from './reducers/user';

const reducers = combineReducers({
    user: userReduce,
});

const storeConfig = () => {
    return legacy_createStore(reducers);
};

export default storeConfig;
