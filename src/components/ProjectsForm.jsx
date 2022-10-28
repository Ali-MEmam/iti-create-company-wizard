import { useState } from "react";
import { Form } from "react-bootstrap";
import SelectedElement from "../reusable/SelectedElement";

const ProjectsForm = ({ company, handleGetAllProject, projects }) => {
  const [projectName, setProjectName] = useState("");
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Project Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Facebook ..."
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button
          className="wrapper-form__add"
          type="button"
          onClick={() => console.log(projectName)}
        >
          Add
        </button>
        {projects?.map((project) => (
          <SelectedElement
            name={project.projectName}
            onClick={(id) => console.log(id)}
            id={project.id}
          />
        ))}
      </Form.Group>
    </div>
  );
};

export default ProjectsForm;
