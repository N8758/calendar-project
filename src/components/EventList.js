import React from "react";
import "./EventList.css";

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <h3>Upcoming Events</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{new Date(event.date).toLocaleDateString()}:</strong> {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
