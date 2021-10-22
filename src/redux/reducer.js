import _posts from '../data/posts.js';
import {combineReducers} from 'redux';

const comments = (state=[], action) => {
    switch (action.type){
        case 'ADD_COMMENT': return [...state, action.comment]
        default: return state
    }
}

const posts = (state = _posts, action) => {
    
    switch (action.type){
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return [...state, action.post]
        default: return state;
    }

}  

const rootReducer = combineReducers({posts, comments})
export default rootReducer;