import React from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">ticktock</div>
      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="text-gray-700">John Doe</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>
    </nav>
  );
}
