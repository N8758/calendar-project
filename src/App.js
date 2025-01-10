import React, { useState } from "react";
import Calendar from "./components/Calendar";
import EventModal from "./components/EventModal";
import EventList from "./components/EventList"; // Import EventList
import { getMonthDays } from "./utils/dateUtils";
import "./App.css";

const App = () => {
  const [month, setMonth] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  // Navigate to the previous or next month
  const navigateMonth = (direction) => {
    const newMonth = new Date(month);
    newMonth.setMonth(month.getMonth() + direction);
    setMonth(newMonth);
  };

  // Handle adding a new event
  const addEvent = (event) => {
    setEvents([...events, event]);
    setShowModal(false);
  };

  // Open the event modal when a date is clicked
  const onDateClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  return (
    <div className="App">
      <h1>Event Calendar</h1>
      <Calendar
        month={month}
        events={events}
        onNavigate={navigateMonth}
        onDateClick={onDateClick}
      />
      {showModal && (
        <EventModal
          selectedDate={selectedDate}
          onClose={() => setShowModal(false)}
          onSave={addEvent}
        />
      )}
      <EventList events={events} /> {/* Display EventList here */}
    </div>
  );
};

export default App;
