import { React, useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import {db} from "./firebase"

const localizer = momentLocalizer(moment)

export default function CalendarHome() {
  const [events, setEvents] = useState([]);
    
      useEffect(() => {
        db.collection("events").onSnapshot((snapshot) => {
          setEvents(
            snapshot.docs.map((doc) => ({
              start: doc.data().start,
              end: doc.data().end,
              title: doc.data().title
            }))
          );
        });
      }, []);

  return (
      <div>

      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "70vh", width: "70vw", marginLeft: "auto" }}
      />
    </div>
  );
}