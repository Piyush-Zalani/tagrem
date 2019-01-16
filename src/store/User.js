import { loadUsersSuccess, userLoading } from "./user/actions";
import axios from "axios";
import { API, ACCESS_TOKEN, BASE_URL } from "../constants";
const fetchUsers = () => axios.get(`${BASE_URL}${API.USER}${ACCESS_TOKEN}`);

export const getUsers = () => dispatch => {
  dispatch(userLoading());
  return fetchUsers()
    .then(response => {
      dispatch(loadUsersSuccess(response.data.result));
    })
    .catch(e => console.log(e));
};
