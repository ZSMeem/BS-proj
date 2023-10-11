import {
  faAddressBook,
  faMailBulk,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mainStyle from "../pages/mainPage.module.css";
import dummy from "../../images/man.jpg"

function Info({ user }) {
  return (
    <Container
      style={{
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "10px",
        marginTop: "10px",
        marginBottom: "20px",
      }}
    >
      <Row>
        <Col sm={3} className={mainStyle.profile}>
          <img className={mainStyle.profileImg} alt="" src={dummy} />
          <h6>{user.role}</h6>
          <p>{user.id}</p>
        </Col>
        <Col sm={9}>
          <div>
            <h6>{user.company}</h6>
            <p>{user.name}</p>
            <p>{user.description}</p>
          </div>
          <Row>
            <Col>
              <p>
                <FontAwesomeIcon icon={faMobile} /> {user.mobile}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />
                {user.phone}
              </p>
            </Col>
            <Col>
              <p>
                <FontAwesomeIcon icon={faMailBulk} />
                {user.email}
              </p>
              <p>
                <FontAwesomeIcon icon={faAddressBook} />
                {user.address}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Info;
