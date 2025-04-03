import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');
    fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name: 'New User', 
        vehicleNumber: 'MH12-1234',
        balance: 500, 
      }),
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        if (data.message === "User registered successfully!") {
          setSuccessMessage("Sign In successful. Now you can log in!");
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch(error => {
        setLoading(false);
        setErrorMessage("Error signing in. Please try again.");
      });
  };
  

  return (
    <Container className="justify-content-center align-items-center w-25 pt-5">
      <Row>
        <Col>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Sign In</h2>
              {successMessage && (
                <Alert variant="primary" className="text-center">
                  {successMessage}
                </Alert>
              )}

              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-4" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" role="status" /> : 'Sign In'}
                </Button>
              </Form>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
