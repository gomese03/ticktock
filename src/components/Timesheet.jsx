import React from "react";
import TimesheetHeader from "./TimesheetHeader";
import TimesheetDay from "./TimesheetDay";

const days = [
  { date: "Jan 21", tasks: ["Homepage Development", "Homepage Development"] },
  { date: "Jan 22", tasks: ["Homepage Development", "Homepage Development", "Homepage Development"] },
  { date: "Jan 23", tasks: ["Homepage Development", "Homepage Development", "Homepage Development"] },
  { date: "Jan 24", tasks: ["Homepage Development", "Homepage Development", "Homepage Development"] },
  { date: "Jan 25", tasks: [] },
];

const Timesheet = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <TimesheetHeader />

      <div className="mt-6 space-y-6">
        {days.map((day, idx) => (
          <TimesheetDay key={idx} date={day.date} tasks={day.tasks} />
        ))}
      </div>
    </div>
  );
};

export default Timesheet;
