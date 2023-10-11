import { Chart } from "chart.js/auto";
import React, { useEffect, useRef } from "react";
import mainStyle from "../pages/mainPage.module.css";

function CurrentTask() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["React Js", "Angular Js", "Vue Js"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div>
      <div className={mainStyle.currentTask}>
        <h5>Current Task</h5>
        {/* <div className="current-task-top">
          <div className="title-status">
            <div className="title">UI/UX Design</div>
            <div className="status">In Progress</div>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            unde cupiditate magni! Doloremque ratione maxime maiores blanditiis,
            sapiente impedit exercitationem temporibus illo, sequi praesentium
            modi quam adipisci harum ex! Sit?
          </div>
          <div className="comment">
            <div className="comment-text">Social Geek Made</div>
          </div>
        </div> */}
        <div className={mainStyle.currentTaskTop}>
          <canvas ref={chartRef} />
        </div>
        {/* <div className="current-task-top">
          <div className="title-status">
            <div className="title">UI/UX Design</div>
            <div className="status">In Progress</div>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            unde cupiditate magni! Doloremque ratione maxime maiores blanditiis,
            sapiente impedit exercitationem temporibus illo, sequi praesentium
            modi quam adipisci harum ex! Sit?
          </div>
          <div className="comment">
            <div className="comment-text">Social Geek Made</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CurrentTask;
