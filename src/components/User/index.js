import React, { Component } from "react";
import axios from "axios";
import {
  API,
  ACCESS_TOKEN,
  BASE_URL,
  USER_TABLE_COLUMNS
} from "../../constants";
import { DefaultTable } from "../index";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount = () => {
    const self = this;
    self.setState({ loading: true });
    axios
      .get(`${BASE_URL}${API.USER}${ACCESS_TOKEN}`)
      .then(function(response) {
        // handle success
        self.setState({ list: response.data.result });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        self.setState({ loading: false });
        // always executed
      });
  };
  render = () => {
    const { list, loading } = this.state;
    console.log(list);
    return (
      <DefaultTable
        list={list}
        columns={USER_TABLE_COLUMNS}
        loading={loading}
      />
    );
  };
}

export default User;
