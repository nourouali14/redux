import { ADD_USER, DELETE_USER, GET_USER } from "../constants/Constants";

export const usersReducer=(state={users:[]},{type,payload})=>{
switch (type) {
    case GET_USER:
     return {...state,users:payload}
    case ADD_USER:
        return {users:[...state.users,payload]}
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userId
            ? { ...user, ...action.payload.updatedUser }
            : user
        ),
      };
    case DELETE_USER:
        return {users: state.users.filter((user)=>user.id!==payload)}
    default:
        return state;
}

};
export default usersReducer;