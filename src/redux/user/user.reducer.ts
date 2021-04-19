// Types
import { userActionTypes } from './user.types';
// Interfaces
import { IUserAction, IUserReducer } from './userInterfaces';

const INITIAL_STATE: IUserReducer = {
  currentUser: null,
  notification: {
    message: '',
    type: 'info'
  }
}

const userReducer = (state: IUserReducer = INITIAL_STATE, action: IUserAction) => {
  switch(action.type){
    case userActionTypes.SET_CURRENT_USER:
      return {
         ...state,
         currentUser: action.payload
      }
      case userActionTypes.SET_NOTIFICATION:
        return {
           ...state,
           notification: action.payload
        }
    default:
      return state;
  }
};

export default userReducer;
