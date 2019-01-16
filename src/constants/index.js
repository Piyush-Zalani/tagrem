const BASE_URL = "https://gorest.co.in/public-api";
const API = {
  USER: "/users?_format=json&access-token="
};

const ACCESS_TOKEN = "QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR";

const USER_TABLE_COLUMNS = {
  id: "Id",
  name: "Name",
  email: "Email",
  gender: "Gender",
  dob: "DOB"
};

const ADD_USER_FIELDS = [
  { name: "first_name", label: "First Name" },
  { name: "last_name", label: "Last Name" },
  { name: "gender", label: "Gender" },
  { name: "email", label: "Email" }
];

export { ADD_USER_FIELDS, BASE_URL, API, ACCESS_TOKEN, USER_TABLE_COLUMNS };
