import {createStore, combineReducers} from 'redux';

import partsReducer from './reducers/partsReducer';

const rootReducer = combineReducers({
    partsR: partsReducer
});

export default createStore(rootReducer);