import React from "react";
import { Link, Route } from "react-router-dom";
import { AddUser, User } from "../index";

const Dashboard = () => {
  return (
    <>
      <Link to="/users">
        <button>Users</button>
      </Link>
      <Link to="/add-user">
        <button>Add User</button>
      </Link>
      <Route exact path="/users" component={User} />
      <Route exact path="/add-user" component={AddUser} />
    </>
  );
};

export default Dashboard;
