import React from "react";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Hero from "./images/hero.png";

function LogIn() {
  return (
    <>
      <Container fluid>
        <Card className="w-100 d-flex my-2">
          <Card.Body className="d-flex gap-2 justify-content-start w-100 position-relative">
            <i className="bi bi-key "></i>
            <h5>Change Password</h5>
            <i className="bi bi-arrow-down-short position-absolute end-0 fs-3"></i>
          </Card.Body>
        </Card>
        <Alert key="danger" variant="danger">
          This is a Danger alert—check it out!
        </Alert>
        <div className="row d-flex w-100 justify-content-center m-6">
          <Card className="w-50">
            <div className="d-flex justify-content-between mt-3">
              <img
                src={Hero}
                alt="Hero"
                style={{ height: "30px", width: "100px", marginLeft: "30px" }}
              />
              <h6
                className="text-center bg-primary px-3 py-2 rounded-top"
                style={{
                  width: "fit-content",
                  marginRight: "30px",
                  marginBottom: "0",
                }}
              >
                Log In
              </h6>
            </div>
            <div className="w-100">
              <Container fluid>
                {" "}
                <div
                  className="w-100 bg-primary"
                  content=""
                  style={{ height: "5px" }}
                ></div>
              </Container>
              <Form className="p-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Number</Form.Label>
                  <Form.Control type="email" placeholder="Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <div className="d-flex justify-content-between">
                    <Form.Label>Password</Form.Label>
                    <Form.Label className="text-muted">
                      <a href="/">Lost Password?</a>
                    </Form.Label>
                  </div>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                  className="d-flex mb-3 justify-content-between align-content-center"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" label="Remember Me" />
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center">
                  <div
                    className="bg-dark"
                    style={{ height: "5px", content: "", width: "45%" }}
                  ></div>
                  <h6>or</h6>
                  <div
                    className="bg-dark"
                    style={{ height: "5px", content: "", width: "45%" }}
                  ></div>
                </div>

                <div className="d-flex justify-content-between my-3">
                  <h6 className="text-center">
                    Dont have an account yet?{" "}
                    <a href="/">Create Free Account.</a>
                  </h6>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default LogIn;
