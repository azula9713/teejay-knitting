import React from "react";
import { Doughnut } from "react-chartjs-2";

const CommonData = ({ chartData, cardData }) => {
  return (
    <>
      <div className="mt-8">
        <h1 className="font-semibold">{cardData?.["Machine Name"]}</h1>
      </div>
      <hr />
      <span className="text-xs font-light">EPF number : 302</span>
      <h3 className="font-medium text-sm">
        EFFICIENCY {cardData?.Efficiency}%
      </h3>

      <Doughnut data={chartData} />

      <h3 className="font-medium text-sm mt-2">
        BATCH : {cardData?.["Batch Number"]}
      </h3>
      <h3 className="font-medium text-sm">
        QUALITY : {cardData?.Quality} Rose
      </h3>
      <h3 className="font-medium text-sm">Length {cardData?.Length}</h3>
    </>
  );
};

export default CommonData;
