import { Button, Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { logout } from "./logout";
import { useState } from "react";
import CenterModal from "../utils/modal";
import Edit from "./edit";

const Navigation = () => {
  const [modalShow, setModalShow] = useState(false);

  const name = localStorage.getItem("nama");
  return (
    <Navbar>
      {(window.location.pathname == "/register" || window.location.pathname == "/login") ? (
        <Container className="py-2">
          <Navbar.Brand href="/" className="fw-bold fs-4"><span className="text-primary">D</span>'Attendance</Navbar.Brand>
        </Container>
      ) : (
        (localStorage.getItem("nama") && localStorage.getItem("nip")) ? (
          <Container className="py-2">
            <Navbar.Brand href="/dashboard" className="fw-bold fs-4"><span className="text-primary">D</span>'Attendance</Navbar.Brand>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setModalShow(true)}>Edit Profile</Dropdown.Item>
                <Dropdown.Item onClick={() => logout("/")}>Log out</Dropdown.Item>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  title={<h3>Edit Profile</h3>}
                  page={<Edit />}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        ) : (
          <Container className="py-2">
            <Navbar.Brand href="/" className="fw-bold fs-4"><span className="text-primary">D</span>'Attendance</Navbar.Brand>
            <Nav>
              <Nav.Link href="/login" className="fs-5">Login</Nav.Link>
              <Nav.Link href="/register" className="fs-5">Register</Nav.Link>
            </Nav>
          </Container>
        )
      )}
    </Navbar>
  );
};

export default Navigation;