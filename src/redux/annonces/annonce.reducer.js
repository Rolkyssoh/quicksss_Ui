const INITIAL_STATE = {
    annonces: null
}

const annoncesCollectiionReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ALL_ANNONCE':
            return {
                ...state,
                annoncesCollection: action.payload
            }
        // case 'LOG_OUT':
        //     return {
        //         INITIAL_STATE,
        //     } 
        
        default:
            return state;
    }
}

export default annoncesCollectiionReducer;