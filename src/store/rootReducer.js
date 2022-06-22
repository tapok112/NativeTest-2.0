export const SET_USER_DATA = 'SET_USERDATA';

const initialState = {
  user: null,
  authData: null
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_USER_DATA:
          return {
              ...state,
              user: action.payload.user,
              authData: action.payload.authData
          }
      default:
          return state
  }
}