import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import './SignUpForm.css'; 
import { Navbar, Nav } from 'react-bootstrap';

const figmaTermsOfServiceUrl = 'https://www.figma.com/terms/';
const figmaPrivacyPolicyUrl = 'https://www.figma.com/privacy/';
const figmaLoginUrl = 'https://www.figma.com/file/T5XVMuJ7nuo5SxbClAo3UYiP/Groups?node-id=0%3A1';


const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            { }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Form onSubmit={handleSubmit} className="signup-form">
          <h2 className="form-heading">Want to check out this file? Sign up or Log in</h2>
          <div className="google-login">
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID"
              buttonText="Continue with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              style={{ color: 'black', fontWeight: 'bold', borderColor: 'black' }}
            />
          </div>
          <p className="or-divider">or</p>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ marginBottom: '10px', borderColor: 'black' }}
            /> <br></br>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ marginBottom: '10px', borderColor: 'black' }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="signup-button"
            style={{ backgroundColor: 'black', borderColor: 'black', color: 'white' }}
          >
            Create account
          </Button>
          <p className="terms">
            By clicking 'Create account' or 'Continue with Google', you agree to the{' '}
            <a href={figmaTermsOfServiceUrl} target="_blank" rel="noopener noreferrer">
              Figma TOS
            </a>{' '}
            and{' '}
            <a href={figmaPrivacyPolicyUrl} target="_blank" rel="noopener noreferrer">
              Figma Privacy Policy
            </a>
            .
          </p>
          <a
            href={figmaLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Use single sign-on
          </a>
          <p className="login-link">
            Already have an account? <a href={figmaLoginUrl} target="_blank" rel="noopener noreferrer">Login</a>
          </p>
        </Form>
      </Container>
    </div>
  );
};

export default SignUpForm;
