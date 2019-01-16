import initialState from "../../store/initialState";
import * as types from "./types";
export default function userLoading(state = initialState.users, action) {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: action.isLoading
      };
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false
      };
    default:
      return state;
  }
}
