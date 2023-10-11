import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import mainStyle from "../pages/mainPage.module.css";

function BankInformation({ bankInfo }) {
  return (
    <div
      className={mainStyle.card}
      style={{ marginRight: "2px", marginLeft: "2px" }}
    >
      <div className={mainStyle.bankInfoUpper}>
        <h5>Bank Informations</h5>

        <Button className="border-info bg-white rounded-0">
          <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#a89898" }} />
        </Button>
      </div>
      <div className={mainStyle.personalInfoLow}>
        <Row>
          <Col className={mainStyle.personalInfoKey}>
            <p>Bank Name</p>
            <p>Account No.</p>
            <p>IFSC Code</p>
            <p>Pan No.</p>
            <p>UPI ID</p>
          </Col>
          <Col>
            <p>{bankInfo.bankInfo}</p>
            <p>{bankInfo.account}</p>
            <p>{bankInfo.ificCode}</p>
            <p>{bankInfo.panNo}</p>
            <p>{bankInfo.upiId}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BankInformation;
