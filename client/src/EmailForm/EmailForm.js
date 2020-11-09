import React from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("There is something missing here.")
    .required("Please enter an email so that I can reach back to you"),
  name: yup.string().required("Your name please"),
  content: yup.string().required("You should have something to say"),
  reason: yup.string().required("You may select others if nothing matches"),
});
const EmailForm = ({ handleSend }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      content: "",
      reason: "Job",
    },
    onSubmit: handleSend,
    validationSchema: schema,
  });
  const { handleSubmit, handleChange, touched, errors, values } = formik;
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="emailForm.reason">
        <Form.Label>Reason for reaching out</Form.Label>
        <Form.Control
          as="select"
          onChange={handleChange}
          value={values.reason}
          isInvalid={touched.reason && !!errors.reason}
          name="reason"
        >
          <option>Job</option>
          <option>Feedback</option>
          <option>Others</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.reason}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="emailForm.email">
        <Form.Label>Your email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={values.email}
          isInvalid={touched.email && !!errors.email}
          name="email"
        />
        <Form.Text className="text-muted">
          This is to reach back to you.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="emailForm.name">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          isInvalid={touched.name && !!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="emailForm.content">
        <Form.Label>Eager to hear from you...</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          required
          onChange={handleChange}
          value={values.content}
          isInvalid={touched.content && !!errors.content}
          name="content"
        />
        <Form.Control.Feedback type="invalid">
          {errors.content}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="formik">Send</Button>
    </Form>
  );
};

export default EmailForm;
