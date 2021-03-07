import LISTING_DATA from './listing.data';

const INITIAL_STATE = {
    collections: LISTING_DATA
};

const listingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default listingReducer