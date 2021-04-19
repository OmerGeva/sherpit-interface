import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist'

// export interface RootState {
//   userReducer: (state: IUserReducer | undefined, action: IUserAction) => IUserReducer,
//   cartReducer: any
// }

import rootReducer from './root-reducer';
import { IUserAction, IUserReducer } from './user/userInterfaces';

const middlewares:[any] = [thunk];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store , persistor };
