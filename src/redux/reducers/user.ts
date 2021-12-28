import {
    GET_USER,
    GetUserAction,
    UserState,
  } from './../../types'
  
  const initialState: UserState = {
    userList: []
  }
  
  const user = (
    state = initialState,
    action: GetUserAction
  ): UserState => {
    switch (action.type) {
    case GET_USER:
        console.log(action.payload.userList)
      return { ...state, userList: action.payload.userList }
  
    default:
      return {...state}
    }
  }
  
  export default user
  