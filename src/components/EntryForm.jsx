import React, { useState } from "react";

export default function EntryForm({ onCancel }) {
  const [project, setProject] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState(12);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { project, type, description, hours };
    console.log("New Entry:", payload);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold mb-2">Add New Entry</h2>

      {/* Select Project */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Project <span className="text-red-500">*</span>
        </label>
        <select
          required
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Project Name</option>
          <option value="Project A">Project A</option>
          <option value="Project B">Project B</option>
        </select>
      </div>

      {/* Type of Work */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Type of Work <span className="text-red-500">*</span>
        </label>
        <select
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select type</option>
          <option value="Bug fixes">Bug fixes</option>
          <option value="Feature">Feature</option>
        </select>
      </div>

      {/* Task Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Task description <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write text here ..."
          className="w-full border rounded-lg px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-xs text-gray-400 mt-1">A note for extra info</p>
      </div>

      {/* Hours */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Hours <span className="text-red-500">*</span>
        </label>
        <div className="inline-flex items-center border rounded-lg">
          <button
            type="button"
            onClick={() => setHours((h) => Math.max(0, h - 1))}
            className="px-3 py-2 text-lg text-gray-600 hover:bg-gray-100"
          >
            −
          </button>
          <span className="px-4">{hours}</span>
          <button
            type="button"
            onClick={() => setHours((h) => h + 1)}
            className="px-3 py-2 text-lg text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add entry
        </button>
      </div>
    </form>
  );
}
