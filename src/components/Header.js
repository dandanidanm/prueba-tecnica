import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/authActions";



const Header = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Risotto</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/recetario">Recetario</Nav.Link>
              <Nav.Link href="/auth/register">Register</Nav.Link>
              {name ? (
              <Nav.Link to="/" onClick={() => dispatch(startLogout())} >
                Logout
              </Nav.Link> 
            ) : (
              <Nav.Link to="/auth/login" className="linknav">Login</Nav.Link>
            )}
            <p className="m-auto text-dark">{name}</p>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
