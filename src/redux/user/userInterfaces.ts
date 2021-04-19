import { userType } from "./useTypes";

export interface IUserReducer {
    currentUser: userType | null,
    notification: {
      message: string,
      type: string
    }
  }
  
export interface IUserAction {
type: string;
payload: userType;
}
export interface NotificationAction {
  type: string,
  payload: {message: string, type: string}
  }
      