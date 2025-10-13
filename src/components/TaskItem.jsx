import React from "react";
import { MoreVertical } from "lucide-react";

const TaskItem = ({ taskName }) => {
  return (
    <div className="flex items-center justify-between border rounded-xl p-3 hover:bg-gray-50 transition">
      <div className="text-gray-800">{taskName}</div>
      <div className="flex items-center gap-3">
        <span className="text-gray-500 text-sm">4 hrs</span>
        <span className="text-blue-600 text-sm cursor-pointer hover:underline">Project Name</span>
        <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default TaskItem;
