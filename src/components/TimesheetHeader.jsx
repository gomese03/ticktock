import React from "react";

const TimesheetHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">This week’s timesheet</h2>
        <p className="text-gray-500 text-sm">21 – 26 January, 2024</p>
      </div>
      <div className="text-right">
        <div className="text-gray-600 text-sm mb-1">20/40 hrs</div>
        <div className="w-32 h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-orange-500 rounded-full" style={{ width: "50%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default TimesheetHeader;
