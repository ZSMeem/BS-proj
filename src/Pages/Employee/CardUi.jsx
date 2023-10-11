import React from "react";
import male from "../images/man.jpg";
import female from "../images/woman.jpg";
import "./Cardstyle.css";
import { FaRegStar } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
export const CardUi = (props) => {
  return (
    <>
      <div className="card">
        <div className=" row">
          <div className="col-3 card-body  justify-content-center align-items-center m-auto">
            {props.gender == "Woman" ? (
              <img
                src={female}
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
            ) : (
              <img
                src={male}
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
            )}
            <div className="ratings text-center mt-2">
              <p className="font-weight-light">
                <FaRegStar style={{ fill: "#0F1A43" }} /> {props.rating}
                <span className="mx-2"></span>
                <GoProjectRoadmap style={{ fill: "#0F1A43" }} />
                {props.project}
              </p>

              <i className="icofont-star text-warning fs-4"></i>
            </div>
          </div>
          <div className="col-9 card-body">
            <h6 className="mb-0 mt-2  fs-6">{props.name}</h6>
            <span className="Designation light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1 ">
              {props.designation}
            </span>
            <div className="video-setting-icon mt-3 pt-3 border-top">
              <p>{props.about}</p>
            </div>
            <a href="#" className="btn btn-primary btn-sm mt-1 ViewBtn">
              View Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
