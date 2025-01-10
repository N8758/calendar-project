import React from "react";
import { getMonthDays } from "../utils/dateUtils";

const Calendar = ({ month, events, onNavigate, onDateClick }) => {
  const calendarDays = getMonthDays(month);

  // Create a map of event dates for quick lookup
  const eventDates = events.reduce((acc, event) => {
    const date = new Date(event.date).toISOString().split("T")[0];
    acc[date] = event;
    return acc;
  }, {});

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => onNavigate(-1)}>Previous</button>
        <span>{month.toLocaleString("default", { month: "long", year: "numeric" })}</span>
        <button onClick={() => onNavigate(1)}>Next</button>
      </div>
      <div className="calendar-grid">
        {calendarDays.map((date, index) => {
          const dateString = date.toISOString().split("T")[0];
          const event = eventDates[dateString];

          return (
            <div
              key={index}
              className={`calendar-day ${event ? "has-event" : ""}`}
              onClick={() => onDateClick(date)}
            >
              <span>{date.getDate()}</span>
              {event && <div className="event-indicator">{event.title}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
