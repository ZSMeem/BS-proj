import React, { Component } from "react";
import { CardUi } from "./CardUi";
import "./Cardstyle.css";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";
import FormBody from "./FormBody";
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

import employeeAttributes from "./employeedata.json";
import { Box } from "@mui/material";

const CardsData = () =>  {
  
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

    return(
      <Box className="container justify-content-center" sx={{padding:5}}>
        <br />
        <div className="row row-cols-lg-2 row-cols-2">
          <div className="col d-flex justify-content-start">
            <h2>Employee</h2>
          </div>
          <div className="col d-flex justify-content-end" onClick={toggleShow}>
            <div
              className="btn btn-primary mt-2 mb-2  ViewBtn  .align-items-center"
            >
              <FaCirclePlus style={{ color: "white" }} /> Add Employee
            </div>
          </div>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Add Employee</MDBModalTitle>
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
        <div className="row  row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 ">
          {employeeAttributes.map((record, index) => {
            return (
              <div key={index} className="col-md-6 mb-3">
                <CardUi
                  name={record.name}
                  designation={record.designation}
                  gender={record.gen}
                  about={record.about}
                  rating={record.rating}
                  project={record.project}
                />
              </div>
            );
          })}
        </div>
      </Box>
    );
}

export default CardsData
