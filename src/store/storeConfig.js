import { legacy_createStore, combineReducers } from 'redux';
import userReduce from './reducers/user';
import identysReduce from './reducers/identys';

const reducers = combineReducers({
    user: userReduce,
    identy: identysReduce,
});

const storeConfig = () => {
    return legacy_createStore(reducers);
};

export default storeConfig;
