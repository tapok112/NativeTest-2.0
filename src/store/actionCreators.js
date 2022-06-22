import { SET_USER_DATA } from './rootReducer';

export const setUserData = (payload) => {
  return {
    type: SET_USER_DATA,
    payload
  }
}