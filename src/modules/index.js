import { combineReducers } from 'redux';
import scroll from './scroll';
import size from './size';

const rootReducer = combineReducers({
    scroll,
    size,
})
export default rootReducer;
