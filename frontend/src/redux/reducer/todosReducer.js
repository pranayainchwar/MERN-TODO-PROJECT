import * as ADDNEW_TODO from '../actions/type.js';
const todosReducer = (state = [], action)=>{
    switch (action.type){
        case ADDNEW_TODO:
            return [action.payload, ...state]

        default:
            return state;
    }

};

export default todosReducer;