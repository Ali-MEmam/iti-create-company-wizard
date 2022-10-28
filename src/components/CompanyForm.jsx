import { Form } from "react-bootstrap";

const CompanyForm = ({ setCompany, company }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="facebook@meta.com..."
          value={company.email}
          onChange={(e) => setCompany({ ...company, email: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={company.password}
          onChange={(e) => setCompany({ ...company, password: e.target.value })}
        />
      </Form.Group>
    </div>
  );
};

export default CompanyForm;
