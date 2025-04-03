import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    fetch('http://localhost:3001/login', { 
      method: 'POST',
      headers     : {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json();
    })
    .then(data => {
      if (data.message === "Login successful") {
        localStorage.setItem('userData', JSON.stringify(data.user));
        navigate("/dashboard");
        setErrorMessage('Invalid credentials. Please try again.');
      }
    })
    .catch(error => setErrorMessage("Login failed."));
  };

  return (
    <Container className="w-25 justify-content-center align-items-center pt-5">
      <Row>
        <Col>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>

              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-4">
                  Login
                </Button>
              </Form>

              <div className="text-center mt-3">
                <p>
                  Don't have an account? <a href="/signin">Sign up</a>
                </p>
                <p>
                  <a href="/forgot-password">Forgot password?</a>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
