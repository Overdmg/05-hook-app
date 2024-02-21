const initialState = [{
    id:1,
    todo: 'Practicar Next',
    done: false,

}];


const todoReducer = ( state = initialState, action ) => {


    return state;
};


let todos = todoReducer();

console.log(todos);
