import { Badge } from "react-bootstrap";

const Result = () => {
  return (
    <div>
      <div className="project">
        <h1 className="project_title">Project A</h1>
        <div className="project_employee">
          <div className="project_employee-name">Ahmed</div>
          <Badge className="project_employee-task">Task 1</Badge>
          <Badge className="project_employee-task">Task 1</Badge>
        </div>
      </div>
      <div className="project">
        <h1 className="project_title">Project A</h1>
        <div className="project_employee">
          <div className="project_employee-name">Ahmed</div>
          <Badge className="project_employee-task">Task 1</Badge>
          <Badge className="project_employee-task">Task 1</Badge>
        </div>
      </div>
    </div>
  );
};

export default Result;
