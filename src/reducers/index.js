import { combineReducers } from 'redux';

import historyReducer from './historyReducer'

const reducers = combineReducers({
  history: historyReducer,
})

export default reducers;