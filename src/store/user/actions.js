import * as types from "./types";
export const loadUsersSuccess = users => {
  return { type: types.LOAD_USERS_SUCCESS, users };
};

export const userLoading = (isLoading = true) => {
  return { type: types.LOADING, isLoading };
};
