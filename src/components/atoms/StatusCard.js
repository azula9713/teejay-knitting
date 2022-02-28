import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom";
import CommonData from "./CommonData";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Efficiency"],
  datasets: [
    {
      label: "# of Votes",
      data: [80, 20],
      backgroundColor: ["#7DCF97", "#B1B1B1"],
      borderColor: ["#7DCF97", "#B1B1B1"],
      borderWidth: 1,
    },
  ],
};
function StatusCard({ cardData }) {
  return (
    <div>
      <Link to="/dashboard">
        <div className="  border-t-2 rounded-md border-t-theme_green-0 shadow-md text-black w-60 py-3 relative text-left px-5 mx-3 my-3">
          <span className="bg-theme_green-0 p-1 text-xs text-white font-bold absolute right-5 mr-5 mt-3 rounded-md">
            {cardData?.Status}
          </span>
          <CommonData cardData={cardData} chartData={data} />
        </div>
      </Link>
    </div>
  );
}

export default StatusCard;
