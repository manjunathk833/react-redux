import posts from '../data/posts.js';
import {combineReducers } from 'redux';


const postReducer = (state = posts, action) =>{
    
    switch (action.type){
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return [...state, action.post]
        default: return state;
    }

    return state;
}

export default postReducer;