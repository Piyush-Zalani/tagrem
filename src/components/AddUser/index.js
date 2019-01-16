import React, { Component } from "react";
import { Button, Col } from "react-bootstrap";
import axios from "axios";
import { ADD_USER_FIELDS, API, ACCESS_TOKEN, BASE_URL } from "../../constants";
import { formNormalization } from "../../utils";
import { FieldGroup } from "../index";
import { connect } from "react-redux";

class AddUser extends Component {
  onSubmit = async e => {
    e.preventDefault();
    const schema = formNormalization({ e });
    axios.post(`${BASE_URL}${API.USER}${ACCESS_TOKEN}`, schema).then(res => {
      if (res.data._meta.code !== 200) {
        const error = Array.isArray(res.data.result)
          ? res.data.result.map(res => res.message).join(" ")
          : res.data.result.message;
        return error;
      }
      return this.formRef.reset();
    });
  };
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <form
          onSubmit={this.onSubmit}
          ref={formRef => {
            this.formRef = formRef;
          }}
        >
          {ADD_USER_FIELDS.map(field => (
            <FieldGroup
              key={field.name}
              name={field.name}
              id={field.name}
              label={field.label}
            />
          ))}
          <Col md={12}>
            <Button type="submit"> Add User </Button>
          </Col>
        </form>
      </div>
    );
  }
}

export default connect(state => {
  return {
    loading: state.user.loading
  };
})(AddUser);
