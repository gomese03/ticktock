import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // For demo — ideally you'd get this from session/user context
  const username = "John Doe";

  const handleLogoClick = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b px-6 py-4 flex justify-between items-center relative">
      <div className="flex items-center gap-8">
        <div
          onClick={handleLogoClick}
          className="text-xl font-bold cursor-pointer hover:text-blue-600 transition"
        >
          ticktock
        </div>

        <div className="text-sm">Timesheets</div>
      </div>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="text-gray-800 font-medium flex items-center gap-2 hover:text-blue-600 transition"
        >
          {username}
          <svg
            className={`w-4 h-4 transform transition-transform ${
              dropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-36 bg-white border rounded-lg shadow-lg z-10">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
