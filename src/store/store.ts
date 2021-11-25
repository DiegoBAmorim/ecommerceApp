import {createStore, combineReducers} from 'redux';


import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import CartProductsReducer from './CartProducts/CartProducts.reducers';
import TestReducer from './Test/Test.reducer';

const rootReducer : any = combineReducers({
    CartProductsReducer,
});



const persistedReducer = persistReducer(
    {
        key: 'root',
        storage: AsyncStorage,
        stateReconciler: hardSet,
    },
    rootReducer
);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);




