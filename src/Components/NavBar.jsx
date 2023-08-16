import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { InputGroup } from "react-bootstrap";

export default function NavBar() {
  const mappingList = [false];
  return (
    <>
      {mappingList.map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid className="d-flex justify-content-between">
            <div>
              <Navbar.Toggle
                className="mx-2"
                style={{ outline: "none", width: "fit-content" }}
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Brand href="#" style={{ fontSize: "1.5rem" }}>
                Food<span>In</span>
              </Navbar.Brand>
            </div>

            <div>
              <Form className="searchOption">
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Text style={{ cursor: "pointer" }}>
                      <AiOutlineSearch />
                    </InputGroup.Text>

                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    ></Form.Control>
                  </InputGroup>
                </Form.Group>
              </Form>
            </div>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <div>
                    <Form className="d-flex">
                      <Form.Group>
                        <InputGroup>
                          <InputGroup.Text style={{ cursor: "pointer" }}>
                            <AiOutlineSearch />
                          </InputGroup.Text>

                          <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                          ></Form.Control>
                        </InputGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div>
              <Button variant="success">
                Cart
                {/* <Badge bg="secondary">9</Badge> */}
                {/* <span className="visually-hidden">unread messages</span> */}
              </Button>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
