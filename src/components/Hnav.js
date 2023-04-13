import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Hero from "./images/hero.png";

function Hnav() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        style={{ height: "10vh", alignContent: "center" }}
      >
        <Container>
          <Link to="/">
            <img src={Hero} alt="hero" style={{ width: "70%" }} />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="m-auto d-flex ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 position-relative position-relative-example"
                aria-label="Search"
                style={{ width: "40vw", borderRadius: "20px" }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Container
                  className="d-flex me-4"
                  style={{ alignItems: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-hourglass-split me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                  </svg>
                  <div>
                    <div className="fs-6">Plan Expiry</div>
                    <h6
                      style={{ fontSize: "0.7rem" }}
                      className="text-muted text-monospace"
                    >
                      11/02/2023
                    </h6>
                  </div>
                </Container>
              </Link>
              <Link to="login" style={{ textDecoration: "none" }}>
                <Container
                  className="d-flex m-10"
                  style={{ alignItems: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  <div>
                    <div>Sufiyan Pawaskar</div>
                    <h6
                      style={{ fontSize: "0.7rem" }}
                      className="text-muted text-monospace"
                    >
                      See Profile
                    </h6>
                  </div>
                </Container>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Hnav;
