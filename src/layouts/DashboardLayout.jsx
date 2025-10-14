import React from "react";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">
        {children}
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm border-t">
        © 2025 gomese. No rights reserved.
      </footer>
    </div>
  );
}
