import { useState } from "react";
import { Badge, Form } from "react-bootstrap";

const TasksForm = ({ projects, employees, handleGetAllTasks, tasks }) => {
  console.log(projects, employees, tasks);
  const [taskData, setTaskData] = useState({
    taskName: "",
    employeeId: "",
    projectId: "",
  });
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Create UI"
          value={taskData.taskName}
          onChange={(e) =>
            setTaskData({ ...taskData, taskName: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Name</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={taskData.employeeId}
          onChange={(e) =>
            setTaskData({ ...taskData, employeeId: e.target.value })
          }
        >
          <option disabled>Select Employee</option>
          {employees.map((employee) => (
            <option value={employee.id} key={employee.id}>
              {employee.employeeName}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
        value={taskData.projectId}
        onChange={(e) =>
          setTaskData({ ...taskData, projectId: e.target.value })
        }
      >
        <Form.Label>Select Project</Form.Label>
        <Form.Select aria-label="Default select example">
          <option disabled>Select Employee</option>
          {projects.map((project) => (
            <option value={project.id} key={project.id}>
              {project.projectName}
            </option>
          ))}
        </Form.Select>
        <button
          className="wrapper-form__add"
          type="button"
          onClick={() => console.log(taskData)}
        >
          Add
        </button>
        <div className="project mt-3">
          <h1 className="project_title">Project A</h1>
          <div className="project_employee">
            <div className="project_employee-name">Ahmed</div>
            <Badge className="project_employee-task">Task 1</Badge>
            <Badge className="project_employee-task">Task 1</Badge>
          </div>
        </div>
      </Form.Group>
    </div>
  );
};

export default TasksForm;
