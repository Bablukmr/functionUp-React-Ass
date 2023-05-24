import { ADD_TODO, DELETE_ALL } from "../actions";

const initialState=[
    {id: 1, todo: 'FunctionUp Classs', completed: false},
    {id: 2, todo: 'Lunch Break', completed: true},
    {id: 3, todo: 'T/A session', completed: false },
];

export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        default: return state;
    }
}