import React from "react";
import TimesheetFilters from "../components/TimesheetFilters";
import TimesheetTable from "../components/TimesheetTable";
import Pagination from "../components/Pagination";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Your Timesheets</h1>
      <TimesheetFilters />
      <TimesheetTable />
      <Pagination />
    </>
  );
}
