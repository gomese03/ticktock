import React from "react";

export default function TimesheetFilters() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select className="border rounded-md px-3 py-2 text-gray-700 bg-white shadow-sm focus:outline-none">
        <option>Date Range</option>
        <option>This Month</option>
        <option>Last Month</option>
      </select>
      <select className="border rounded-md px-3 py-2 text-gray-700 bg-white shadow-sm focus:outline-none">
        <option>Status</option>
        <option>Completed</option>
        <option>Incomplete</option>
        <option>Missing</option>
      </select>
    </div>
  );
}
