import { faUikit } from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faHourglass,
  faMessage,
  faPaperclip,
  faPenToSquare,
  faPerson,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import mainStyle from "../pages/mainPage.module.css";

function Slide({
  projectName,
  projectWork,
  attach,
  time,
  members,
  comments,
  progress,
  timeLeft,
}) {
  const now = 60;

  return (
    <div className={mainStyle.card}>
      <div className={mainStyle.cardTop}>
        <div className={mainStyle.cardIcon}>
          <FontAwesomeIcon icon={faUikit} style={{ color: "#ffffff" }} />
        </div>
        <p>{projectName}</p>
      </div>
      <div className={mainStyle.bankInfoUpper}>
        {" "}
        <Card.Title>{projectWork}</Card.Title>
        <div>
          <Button className="trash-button border-info bg-white rounded-0">
            <FontAwesomeIcon icon={faTrash} style={{ color: "#a89898" }} />
          </Button>
          <Button className="edit-button border-info bg-white rounded-0">
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ color: "#a89898" }}
            />
          </Button>
        </div>
      </div>

      <div className={mainStyle.cardInfo}>
        <Row>
          <Col>
            <p>
              <FontAwesomeIcon icon={faPaperclip} />
              {attach}
            </p>
            <p>
              <FontAwesomeIcon icon={faPerson} />
              {members}
            </p>
          </Col>
          <Col>
            <p>
              <FontAwesomeIcon icon={faHourglass} />
              {time}
            </p>
            <p>
              <FontAwesomeIcon icon={faMessage} />
              {comments}
            </p>
          </Col>
        </Row>
      </div>
      <div className={mainStyle.cardLower}>
        <p className={mainStyle.cardProgressTest}>Progress</p>
        <div className={mainStyle.cardProgressTime}>
          <FontAwesomeIcon icon={faClock} />
          <span style={{ marginLeft: "3px" }}>{timeLeft}</span>
        </div>
      </div>
      <ProgressBar now={progress} label={`${now}%`} visuallyHidden />
    </div>
  );
}

export default Slide;
