import React, { useState } from "react";
import Modal from "./Modal";
import EntryForm from "./EntryForm";

const AddTaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="w-full border border-dashed rounded-xl py-2 text-gray-500 hover:text-blue-600 hover:border-blue-400 transition">
        + Add new task
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <EntryForm onCancel={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default AddTaskButton;
