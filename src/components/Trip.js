import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Foll from "./Foll";

function Trip() {
  return (
    <>
      <Container fluid>
        <Card className="w-100 d-flex my-2">
          <Card.Body className="d-flex gap-2 justify-content-start w-100 position-relative">
            <h5>Total Trips : 5</h5>
            <i class="bi bi-arrow-down-short position-absolute end-0 fs-3"></i>
          </Card.Body>
        </Card>
        <Card>
          <div
            className="bg-primary"
            style={{ height: "4px", width: "100%", content: "" }}
          ></div>
          <Card.Body className="d-flex gap-3 align-items-center justify-content-between">
            <div className="d-flex gap-3">
              <div className="">
                <h6>Trip Date:</h6>
                <Form.Control type="date" style={{ width: "100%" }} />
              </div>
              <div>
                <h6>To</h6>
                <Form.Control type="date" style={{ width: "100%" }} />
              </div>
              <div>
                <h6>Status:</h6>
                <Form.Control type="text" style={{ width: "50%" }} />
              </div>
            </div>
            <div className="d-flex gap-3">
              <Button variant="warning" style={{ height: "5%" }}>
              <i class="bi bi-x"></i>Close
              </Button>
              <Button variant="danger" style={{ height: "5%" }}>
              <i class="bi bi-trash3"></i>Clear
              </Button>
              <Button variant="primary" style={{ height: "5%" }}>
              <i class="bi bi-funnel"></i> Apply
              </Button>
            </div>
          </Card.Body>
          <div
            className="bg-primary"
            style={{ height: "4px", width: "100%", content: "" }}
          ></div>
        </Card>
        <Card>
            <Foll/>
        </Card>
      </Container>
    </>
  );
}

export default Trip;
