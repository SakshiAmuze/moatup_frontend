import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css'; // Add custom styles
import url from '../../env';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from your backend or API
    fetch(`${url.apipath}events/get`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(
          data.map((event) => ({
            title: event.title,
            start: event.date,
            backgroundColor: event.color, // Customize color
          }))
        );
      });
  }, []);

  return (
    <div className="calendar-container">
      <div className="filters">
        <h3>Filters</h3>
        {/* Add dropdowns or checkboxes for filtering */}
        <div>
          <label>
            <input type="checkbox" />
            Sector 1
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Company 1
          </label>
        </div>
      </div>
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={(info) => alert(`Event: ${info.event.title}`)} // Optional: handle event click
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
