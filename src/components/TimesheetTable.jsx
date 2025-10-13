import React from "react";
import { useNavigate } from "react-router-dom";

const data = [
  { week: 1, date: "1 - 5 January, 2024", status: "COMPLETED" },
  { week: 2, date: "8 - 12 January, 2024", status: "COMPLETED" },
  { week: 3, date: "15 - 19 January, 2024", status: "INCOMPLETE" },
  { week: 4, date: "22 - 26 January, 2024", status: "COMPLETED" },
  { week: 5, date: "28 January - 1 February, 2024", status: "MISSING" },
];

const statusStyles = {
  COMPLETED: "bg-green-100 text-green-800",
  INCOMPLETE: "bg-yellow-100 text-yellow-800",
  MISSING: "bg-pink-100 text-pink-800",
};

export default function TimesheetTable() {
  const navigate = useNavigate();

  const handleRowClick = (week) => {
    navigate(`/dashboard/${week}`);
  };

  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg border">
      <table className="w-full text-left">
        <thead className="border-b bg-gray-50 text-gray-600 text-sm">
          <tr>
            <th className="px-4 py-3 font-medium">WEEK #</th>
            <th className="px-4 py-3 font-medium">DATE</th>
            <th className="px-4 py-3 font-medium">STATUS</th>
            <th className="px-4 py-3 font-medium text-right">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 text-sm">
          {data.map((item) => (
            <tr
              key={item.week}
              onClick={() => handleRowClick(item.week)}
              className="border-b hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-4 py-3">{item.week}</td>
              <td className="px-4 py-3">{item.date}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-3 text-right text-blue-600 font-medium">
                {item.status === "MISSING"
                  ? "Create"
                  : item.status === "INCOMPLETE"
                  ? "Update"
                  : "View"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
