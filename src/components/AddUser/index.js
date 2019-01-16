import React, { Component } from "react";
import axios from "axios";
import { Button, Col } from "react-bootstrap";
import { API, ACCESS_TOKEN, BASE_URL, ADD_USER_FIELDS } from "../../constants";
import { formNormalization } from "../../utils";
import { FieldGroup } from "../index";

class AddUser extends Component {
  onSubmit = e => {
    e.preventDefault();
    const schema = formNormalization({ e });
    axios
      .post(`${BASE_URL}${API.USER}${ACCESS_TOKEN}`, {
        ...schema
      })
      .then(response => {
        this.formRef.reset();
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        ref={formRef => {
          this.formRef = formRef;
        }}
      >
        {ADD_USER_FIELDS.map(field => (
          <FieldGroup name={field.name} id={field.name} label={field.label} />
        ))}
        <Col md={12}>
          <Button type="submit"> Add User </Button>
        </Col>
      </form>
    );
  }
}

export default AddUser;
