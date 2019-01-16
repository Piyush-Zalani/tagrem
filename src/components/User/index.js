import React, { Component } from "react";
import { connect } from "react-redux";
import { USER_TABLE_COLUMNS } from "../../constants";
import { DefaultTable } from "../index";
import { getUsers } from "../../store/User";

class User extends Component {
  componentDidMount = () => {
    const self = this;
    self.props.dispatch(getUsers());
  };
  render = () => {
    const { users: list, loading } = this.props;
    return (
      <DefaultTable
        list={list}
        columns={USER_TABLE_COLUMNS}
        loading={loading}
      />
    );
  };
}

export default connect(state => {
  return {
    users: state.user.users,
    loading: state.user.loading
  };
})(User);
