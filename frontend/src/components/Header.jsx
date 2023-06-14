import { Container, Nav, Navbar } from 'react-bootstrap';

import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>Authenticator</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
            <LinkContainer to="/login">
              <Nav.Link>
                <FaSignInAlt /> Sign In
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>
                <FaSignOutAlt /> Sign Up
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
