import { useState } from "react";
import { Form } from "react-bootstrap";
import SelectedElement from "../reusable/SelectedElement";

const UsersForm = ({ company, handleGetAllEmployees, employees }) => {
  const [employeeName, setEmployeeName] = useState("");

  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ahmed ..."
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        />
        <button
          className="wrapper-form__add"
          type="button"
          onClick={() => console.log(employeeName)}
        >
          Add
        </button>
        {employees?.map((employee) => (
          <SelectedElement
            name={employee.employeeName}
            onClick={(id) => console.log(id)}
            id={employee.id}
          />
        ))}
      </Form.Group>
    </div>
  );
};

export default UsersForm;
