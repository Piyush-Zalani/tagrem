import React from "react";
import {
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Row
} from "react-bootstrap";

const FieldGroup = ({ label, colSpan, ...props }) => (
  <Col md={colSpan || 12}>
    <FormGroup controlId={props.id}>
      <ControlLabel className="w-100">{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  </Col>
);

export default FieldGroup;
