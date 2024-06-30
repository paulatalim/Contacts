import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';
import { thunk } from 'redux-thunk';
import userReduce from './reducers/user';
import identysReduce from './reducers/identys';
import actualIdentyReduce from './reducers/viewIdenty';

const reducers = combineReducers({
    user: userReduce,
    identy: identysReduce,
    actualIdenty: actualIdentyReduce,
});

const storeConfig = () => {
    return legacy_createStore(reducers, compose(applyMiddleware(thunk)));
};

export default storeConfig;
