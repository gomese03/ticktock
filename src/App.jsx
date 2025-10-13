import React from "react";
import Timesheet from "./components/Timesheet";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="font-bold text-lg">ticktock</div>
        <div className="text-sm">John Doe</div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <Timesheet />
      </main>

      <footer className="text-center text-gray-500 text-sm py-6">
        © 2024 gomese. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
