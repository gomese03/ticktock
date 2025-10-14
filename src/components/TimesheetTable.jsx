import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTimesheets } from "../lib/api";

const statusStyles = {
  COMPLETED: "bg-green-100 text-green-800",
  INCOMPLETE: "bg-yellow-100 text-yellow-800",
  MISSING: "bg-pink-100 text-pink-800",
};

export default function TimesheetTable() {
  const navigate = useNavigate();
  const [timesheets, setTimesheets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleRowClick = (week) => {
    navigate(`/dashboard/${week}`);
  };

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getTimesheets();
        if (alive) setTimesheets(data);
      } catch (e) {
        if (alive) setError(e?.message || "Something went wrong");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  if (loading) {
    return <div className="p-6 text-center text-gray-500">Loading timesheets...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-600">Error: {error}</div>;
  }

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
          {timesheets.map((item) => (
            <tr
              key={item.week}
              onClick={() => handleRowClick(item.week)}
              className="border-b hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-4 py-3">{item.week}</td>
              <td className="px-4 py-3">{item.date}</td>
              <td className="px-4 py-3">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[item.status]}`}>
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-3 text-right text-blue-600 font-medium">
                {item.status === "MISSING" ? "Create" : item.status === "INCOMPLETE" ? "Update" : "View"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {timesheets.length === 0 && (
        <div className="text-center py-4 text-gray-500 text-sm">No timesheets found</div>
      )}
    </div>
  );
}
