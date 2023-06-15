import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4 text-primary">
            Authenticator Application
          </h1>
          <p>
            This is an application serving as a template for how to do fullstack
            authentication using Mongodb Express, React, Redux Toolkit and
            NodeJs. It stores JWT in an HTTP-Only cookie.
          </p>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="primary" href="/login" className="me-3">
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="secondary" href="/register" className="me-3">
                Register
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
