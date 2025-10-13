import React from "react";
import TaskItem from "./TaskItem";
import AddTaskButton from "./AddTaskButton";

const TimesheetDay = ({ date, tasks }) => {
  return (
    <div>
      <div className="font-semibold text-gray-700 mb-3">{date}</div>
      <div className="space-y-2">
        {tasks.map((task, idx) => (
          <TaskItem key={idx} taskName={task} />
        ))}
        <AddTaskButton />
      </div>
    </div>
  );
};

export default TimesheetDay;
