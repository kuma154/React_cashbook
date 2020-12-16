export const AppReducer=(state,action)=>{
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(transactions=>transactions.id!==action.id)
             }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[action.transactions,...state.transactions]
            }
        default:
           return state;
    }
}