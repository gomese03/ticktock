import React, { useEffect, useState } from "react";
import TimesheetHeader from "./TimesheetHeader";
import TimesheetDay from "./TimesheetDay";
import { getTimesheetDetails } from "../lib/api";

const Timesheet = ({ week }) => {
  const [timesheet, setTimesheet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const data = await getTimesheetDetails(week);
        console.log('data: ', data);
        if (alive) setTimesheet(data);
      } catch (e) {
        if (alive) setError(e.message || "Failed to fetch timesheet details");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, [week]);

  if (loading) {
    return <div className="p-6 text-center text-gray-500">Loading timesheet...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-600">Error: {error}</div>;
  }

  if (!timesheet) {
    return <div className="p-6 text-center text-gray-500">No timesheet found</div>;
  }

  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <TimesheetHeader week={timesheet.week} totalHours={timesheet.totalHours} />

      <div className="mt-6 space-y-6">
        {timesheet.days.map((day, idx) => (
          <TimesheetDay key={idx} date={day.date} tasks={day.tasks} />
        ))}
      </div>
    </div>
  );
};

export default Timesheet;
