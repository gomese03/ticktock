import React, { useState } from "react";
import Modal from "./components/Modal";
import EntryForm from "./components/EntryForm";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add New Entry
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <EntryForm onCancel={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}
