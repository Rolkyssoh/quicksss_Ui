const INITIAL_STATE = {
    details: null
}

const annonceDetails= (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ANNOCE_DETAILS':
            return {
                ...state,
                details: action.payload
            }
        default:
            return state;
    }
}

export default annonceDetails;