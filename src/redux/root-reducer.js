import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import annoncesCollectiionReducer from './annonces/annonce.reducer';
import annonceDetails from './annonces/annonceDetails.reducer';
import CategoriesReducer from './categories/categories.reducer';
import listingReducer from './listing/listing.reducer';

import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,  
    whitelist:['user']
}
 
const rootReducer = combineReducers({
    user: userReducer,
    categories: CategoriesReducer,
    listing: listingReducer,
    annonces: annoncesCollectiionReducer,
    details: annonceDetails,
})

export default persistReducer(persistConfig, rootReducer); 