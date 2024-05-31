import { legacy_createStore, combineReducers } from 'redux';
import userReduce from './reducers/user';
import identysReduce from './reducers/identys';
import actualIdentyReduce from './reducers/viewIdenty';

const reducers = combineReducers({
    user: userReduce,
    identy: identysReduce,
    actualIdenty: actualIdentyReduce,
});

const storeConfig = () => {
    return legacy_createStore(reducers);
};

export default storeConfig;
