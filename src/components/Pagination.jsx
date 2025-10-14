import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-between items-center mt-4">
      <div>
        <select className="border rounded-md px-2 py-1 text-gray-700 bg-white shadow-sm">
          <option>5 per page</option>
          <option>10 per page</option>
          <option>20 per page</option>
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100">
          Previous
        </button>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`px-3 py-1 border rounded ${
              num === 3 ? "bg-blue-50 text-blue-500" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}
        <button className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
}
