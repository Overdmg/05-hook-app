export const todoReducer = ( initialstate = [], action ) => {
    
    switch (action.type) {
        case 'ABC':
            
            throw new Error('action.type = ABC no esta implementada')


        default:

            return initialstate;
    }


}