import React from "react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-secondary bg-opacity-25 text-center">
      <h4>Q-Zone</h4>
      <div>
        <img src={qZone1} alt="q zone" />
        <img src={qZone2} alt="q zone" />
        <img src={qZone3} alt="q zone" />
      </div>
    </div>
  );
};

export default QZone;
