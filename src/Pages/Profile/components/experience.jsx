import React from "react";
import mainStyle from "../pages/mainPage.module.css";

function Experience({ experience }) {
  return (
    <div>
      <div className={mainStyle.currentTask} style={{ marginBottom: "20px" }}>
        <h5 style={{ marginBottom: "20px" }}>Experience</h5>
        {experience.map((item) => {
          return (
            <div className={mainStyle.experience}>
              <div className={mainStyle.icon}>
                <h4 style={{ padding: "3px" }}>{item.abriviation}</h4>
              </div>
              <div className={mainStyle.experienceBody}>
                <h6>{item.companyName}</h6>
                <p>
                  {item.from} - {item.to}
                </p>
              </div>
            </div>
          );
        })}
        {/* <div className="experience">
          <div className="icon" style={{ backgroundColor: "orange" }}>
            <h4 style={{ padding: "3px" }}>AC</h4>
          </div>
          <div className="experience-body">
            <h6>Apps Code</h6>
            <p>Jan 2021-Jan 2023</p>
          </div>
        </div>
        <div className="experience">
          <div className="icon" style={{ backgroundColor: "red" }}>
            <h4 style={{ padding: "3px" }}>BIT</h4>
          </div>
          <div className="experience-body">
            <h6>BJIT</h6>
            <p>Oct 2020-Jan 2021</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Experience;
