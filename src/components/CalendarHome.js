import { React, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

export default function CalendarHome() {
    const [events, setEvents] = useState([
        {
          start: moment().toDate(),
          end: moment()
            .add(1, "days")
            .toDate(),
          title: "Some title"
        }
      ]); 
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