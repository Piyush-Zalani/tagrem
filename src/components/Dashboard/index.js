import React from "react";
import { Link, Route } from "react-router-dom";
import { AddUser, User } from "../index";
import "./style.scss";

const Dashboard = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/users">
          <button className="link">Users</button>
        </Link>
        <Link to="/add-user">
          <button className="link">Add User</button>
        </Link>
      </div>
      <Route exact path="/users" component={User} />
      <Route exact path="/add-user" component={AddUser} />
    </>
  );
};

export default Dashboard;
