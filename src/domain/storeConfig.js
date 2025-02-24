import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';
import { thunk } from 'redux-thunk';
import userReduce from './reducers/user';
import actualContactReduce from './reducers/view-contact';

const reducers = combineReducers({
    user: userReduce,
    actualContact: actualContactReduce,
});

const storeConfig = () => {
    return legacy_createStore(reducers, compose(applyMiddleware(thunk)));
};

export default storeConfig;
