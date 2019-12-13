import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import listPlugin from "@fullcalendar/list";
import "../App.css";

// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export default class DemoApp extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "Event Now", start: new Date() },
      {
        Id: 1,
        title: "Burj kalifa",
        orderID: 451515,
        start: new Date(2019, 11, 15, 10, 0),
        end: new Date(2019, 11, 15, 12, 30),
        status: "Assesed",
        appointmentTime: new Date(2019, 11, 15),
        integratorAdmin: "mohammed",
        integratorTeam: "salman But",
        eventColor: "red"
      },
      {
        Id: 2,
        title: "Thule Air Crash Report",
        orderID: 21512,
        start: new Date(2019, 11, 16, 10, 0),
        end: new Date(2019, 11, 16, 12, 30),
        status: "Pending",
        appointmentTime: new Date(2019, 11, 16),
        integratorAdmin: "Ajmal",
        integratorTeam: "akmal",
        eventColor: "Yellow"
      },
      {
        Id: 3,
        title: "Blue Moon Eclipse",
        orderID: 336221,
        start: new Date(2019, 11, 17, 10, 0),
        end: new Date(2019, 11, 17, 12, 30),
        status: "Completed",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Riyas",
        integratorTeam: "rashid khan",
        eventColor: "green"
      },
      {
        Id: 4,
        title: "Meteor Showers in 2018",
        orderID: 84848,
        start: new Date(2019, 11, 17, 10, 0),
        end: new Date(2019, 11, 17, 12, 30),
        status: "Inprogress",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        eventColor: "grey"
      }
    ]
  };
  setEventByCalendar = (event, element, view) => {
    console.log(event, element, view);
  };
  //   setEventByCalendar = data => {
  //     console.log(data);
  //     var event = [];
  //     var col = "";
  //     if (data.status === "Assessed") {
  //       col = "red";
  //     } else if (data.status === "Pending") {
  //       col = "Yellow";
  //     } else if (data.status === "Completed") {
  //       col = "green";
  //     } else if (data.status === "Inprogress") {
  //       col = "grey";
  //     }
  //     event.push({
  //       title: data.title,
  //       start: "2019-11-22",
  //       backgroundColor: col,
  //       textColor: "black"
  //     });

  //     // let { calendarEvents } = this.state;
  //     //this.setState({ calendarEvents: calendarEvents });
  //   };
  render() {
    let { calendarEvents } = this.state;
    return (
      <div className="demo-app">
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            ref={this.calendarComponentRef}
            editable={true}
            weekends={this.state.calendarWeekends}
            eventLimit={true}
            //eventData={this.setEventByCalendar(calendarEvents)}
            events={calendarEvents}
            eventClick={function(calEvent, jsEvent, view, resourceObj) {
              console.log(calEvent.event._def);
            }}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }

  toggleWeekends = event => {
    console.log(event);
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  handleDateClick = arg => {
    alert("add event");
  };
}
