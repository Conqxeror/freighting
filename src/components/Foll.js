import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Foll() {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>M/B no.</th>
            <th>Vehicle</th>
            <th>Transporter</th>
            <th>Trip Date</th>
            <th>Freight</th>
            <th>Additional Charge</th>
            <th>Paid</th>
            <th>pending</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5</td>
            <td>MH 01 AZ 1234</td>
            <td className="d-grid w-auto">
              <Button
                variant="outline-secondary"
                size="sm"
                style={{ fontSize: "0.5rem" }}
              >
                DEF
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                style={{ fontSize: "0.5rem" }}
              >
                Mumbai, Kerala, India.
              </Button>
            </td>
            <td>7th Feb 2022</td>
            <td>Transporter $4500 Trucker $4500</td>
            <td>0$/0$</td>
            <td>0$/0$</td>
            <td>$45000/$44000</td>
            <td><div className="d-grid">
              <Button variant="outline-warning">
                Success
              </Button>
            </div></td>
            <td><i class="bi bi-eye"></i>
            <i class="bi bi-trash3"></i>
            </td>
          </tr>
          <tr>
          <td>5</td>
            <td>MH 01 AZ 1234</td>
            <td className="d-grid w-auto">
              <Button
                variant="outline-secondary"
                size="sm"
                style={{ fontSize: "0.5rem" }}
              >
                DEF
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                style={{ fontSize: "0.5rem" }}
              >
                Mumbai, Kerala, India.
              </Button>
            </td>
            <td>7th Feb 2022</td>
            <td>Transporter $4500 Trucker $4500</td>
            <td>0$/0$</td>
            <td>0$/0$</td>
            <td>$45000/$44000</td>
            <td><div className="d-grid">
              <Button variant="outline-success">
                Success
              </Button>
            </div></td>
            <td><i class="bi bi-eye"></i>
            <i class="bi bi-trash3"></i>
            </td>
          </tr>
          <tr>
          <td>5</td>
            <td>MH 01 AZ 1234</td>
            <td className="d-grid w-auto">
              <Button
                variant="outline-secondary"
                size="sm"
                style={{ fontSize: "0.5rem" }}
              >
                DEF
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                style={{ fontSize: "0.5rem" }}
              >
                Mumbai, Kerala, India.
              </Button>
            </td>
            <td>7th Feb 2022</td>
            <td>Transporter $4500 Trucker $4500</td>
            <td>0$/0$</td>
            <td>0$/0$</td>
            <td>$45000/$44000</td>
            <td><div className="d-grid">
              <Button variant="outline-secondary">
                Success
              </Button>
            </div></td>
            <td><i class="bi bi-eye"></i>
            <i class="bi bi-trash3"></i>
            </td>
          </tr>
          <tr>
          <td>5</td>
            <td>MH 01 AZ 1234</td>
            <td className="d-grid w-auto">
              <Button
                variant="outline-secondary"
                size="sm"
                style={{ fontSize: "0.5rem" }}
              >
                DEF
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                style={{ fontSize: "0.5rem" }}
              >
                Mumbai, Kerala, India.
              </Button>
            </td>
            <td>7th Feb 2022</td>
            <td>Transporter $4500 Trucker $4500</td>
            <td>0$/0$</td>
            <td>0$/0$</td>
            <td>$45000/$44000</td>
            <td><div className="d-grid">
              <Button variant="outline-danger">
                Success
              </Button>
            </div></td>
            <td><i class="bi bi-eye"></i>
            <i class="bi bi-trash3"></i>
            </td> 
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Foll;
