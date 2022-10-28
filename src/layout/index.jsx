import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { addNewCompany } from "../APIS/Company";
import { getAllEmployees } from "../APIS/Employees";
import { getAllProjects } from "../APIS/Projects";
import { getAllTasks } from "../APIS/Tasks";
import CompanyForm from "../components/CompanyForm";
import ProjectsForm from "../components/ProjectsForm";
import Result from "../components/Result";
import TasksForm from "../components/TasksForm";
import UsersForm from "../components/UsersForm";

const Layout = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Container className="wrapper">
      <Row className="wrapper-box">
        <Col xs="12">
          <header className="wrapper-header">
            <h1>Create Company</h1>
          </header>
        </Col>
        <Col xs="12" className="wrapper-form">
          <Form>
            {currentStep === 0 && <CompanyForm />}
            {currentStep === 1 && <ProjectsForm />}
            {currentStep === 2 && <UsersForm />}
            {currentStep === 3 && <TasksForm />}
            {currentStep === 4 && <Result />}
            {currentStep !== 4 && (
              <button className="wrapper-submit" type="submit">
                {currentStep < 3 ? (
                  <>
                    Next <span> {currentStep + 1}/4</span>
                  </>
                ) : (
                  <>Finish</>
                )}
              </button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
