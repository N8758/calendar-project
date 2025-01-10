import React, { useState } from "react";

const EventModal = ({ selectedDate, onClose, onSave }) => {
  const [title, setTitle] = useState("");

  // Handle form submission to save the event
  const handleSave = () => {
    const event = {
      date: selectedDate.toISOString().split("T")[0], // Format to YYYY-MM-DD
      title: title,
    };
    onSave(event);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Event</h2>
        <p>{selectedDate.toDateString()}</p>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSave}>Save Event</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventModal;
