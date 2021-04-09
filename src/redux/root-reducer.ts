import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

// Reducers
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart'],
  stateReconciler: hardSet
}

const reducers = {
  user: userReducer,
  cart: cartReducer
}

const rootReducer: any = combineReducers(reducers);

export default persistReducer(persistConfig, rootReducer);
