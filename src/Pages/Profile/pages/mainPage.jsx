import {
  faArrowLeft,
  faArrowRight,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BankInformation from "../components/bankInfo";
import CurrentTask from "../components/currentTask";
import Experience from "../components/experience";
import Info from "../components/info";
import PersonalInformation from "./../components/personalInformation";
import SwiperComponent from "./../components/swiper";
import mainStyle from "./mainPage.module.css";

import FormBody from "../FormBody";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';


function MainPage() {
  const [user, setUser] = useState({});
  const [currentProjects, setCurrentProjects] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({});
  const [bankInfo, setBankInfo] = useState({});
  const [experience, setExperience] = useState([]);
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`http://localhost:125/user`);
        if (!response.ok) {
          throw new Error("Something went Wrong");
        }
        const res = await response.json();
        setUser(res);
        console.log(res);
      } catch (error) {
        console.log(error, "error");
      }
    };
    getUser();
  }, []);
  useEffect(() => {
    const getCurrentProjects = async () => {
      try {
        const response = await fetch(`http://localhost:125/currentProjects`);
        if (!response.ok) {
          throw new Error("Something went Wrong");
        }
        const res = await response.json();
        setCurrentProjects(res);
        console.log(res);
      } catch (error) {
        console.log(error, "error");
      }
    };
    getCurrentProjects();
  }, []);
  useEffect(() => {
    const getPersonalInfo = async () => {
      try {
        const response = await fetch(`http://localhost:125/personalInfo`);
        if (!response.ok) {
          throw new Error("Something went Wrong");
        }
        const res = await response.json();
        setPersonalInfo(res);
        console.log(res);
      } catch (error) {
        console.log(error, "error");
      }
    };
    getPersonalInfo();
  }, []);
  useEffect(() => {
    const getBankInfo = async () => {
      try {
        const response = await fetch(`http://localhost:125/bankInfo`);
        if (!response.ok) {
          throw new Error("Something went Wrong");
        }
        const res = await response.json();
        setBankInfo(res);
        console.log(res);
      } catch (error) {
        console.log(error, "error");
      }
    };
    getBankInfo();
  }, []);
  useEffect(() => {
    const getExperience = async () => {
      try {
        const response = await fetch(`http://localhost:125/experience`);
        if (!response.ok) {
          throw new Error("Something went Wrong");
        }
        const res = await response.json();
        setExperience(res);
        console.log(res);
      } catch (error) {
        console.log(error, "error");
      }
    };
    getExperience();
  }, []);
  return (
    <Container className={mainStyle.main}>
      <div className={mainStyle.mainPageHead}>
        <h3>Employee Profile</h3>
        <Button className="bg-warning border-0"onClick={toggleShow}>
          <FontAwesomeIcon icon={faPenToSquare} />
          Edit Profile
        </Button>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Edit Profile</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                <FormBody/>
                </MDBModalBody>

                <div className="modal-footer">
                  <button onClick={toggleShow} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button onClick={toggleShow} type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
      </div>
      <Row>
        <Col sm={8}>
          <Row>
            <Info user={user} />
          </Row>
          <div className={mainStyle.mid}>
            <h6>Current Projects</h6>
            <div>
              <button className={mainStyle.prevSlide}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className={mainStyle.nextSlide}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          <Row className={mainStyle.currentProjects}>
            <SwiperComponent currentProjects={currentProjects} />
            {/* <Slide /> */}
          </Row>
          <Row className={mainStyle.low}>
            <Col className={mainStyle.personalCol} sm={6}>
              <PersonalInformation personalInfo={personalInfo} />
            </Col>
            <Col className={mainStyle.bankCol} sm={6}>
              <BankInformation bankInfo={bankInfo} />
            </Col>
          </Row>
        </Col>

        <Col sm={4}>
          <Row>
            <CurrentTask />
          </Row>
          <Row>
            <Experience experience={experience} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
