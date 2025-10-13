import React from "react";
import Navbar from "../components/Navbar";
import TimesheetFilters from "../components/TimesheetFilters";
import TimesheetTable from "../components/TimesheetTable";
import Pagination from "../components/Pagination";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">
        <h1 className="text-2xl font-semibold mb-6">Your Timesheets</h1>
        <TimesheetFilters />
        <TimesheetTable />
        <Pagination />
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm border-t">
        © 2024 gomese. All rights reserved.
      </footer>
    </div>
  );
}