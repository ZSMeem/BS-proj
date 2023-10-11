import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import mainStyle from "../pages/mainPage.module.css";

function PersonalInformation({ personalInfo }) {
  return (
    <div
      className={mainStyle.card}
      style={{ marginRight: "2px", marginLeft: "2px" }}
    >
      <div className={mainStyle.bankInfoUpper}>
        <h5>Personal Informations</h5>
        <Button className="border-info bg-white rounded-0">
          <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#a89898" }} />
        </Button>
      </div>

      <div className={mainStyle.personalInfoLow}>
        <Row>
          <Col className={mainStyle.personalInfoKey}>
            <p>Nationality</p>
            <p>Religion</p>
            <p>Marital status</p>
            <p>Passport no.</p>
            <p>Emergency contact</p>
          </Col>
          <Col>
            <p>{personalInfo.nationality}</p>
            <p>{personalInfo.religion}</p>
            <p>{personalInfo.maritalStatus}</p>
            <p>{personalInfo.passport}</p>
            <p>{personalInfo.emergency}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default PersonalInformation;
