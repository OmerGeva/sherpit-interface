import { userActionTypes } from './user.types'
import { IUserAction, NotificationAction } from './userInterfaces'

export const setCurrentUser = (user: any): IUserAction => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
})

export const setNotfication = (notification: {message: string, type: string}): NotificationAction => ({
  type: userActionTypes.SET_NOTIFICATION,
  payload: notification
})

