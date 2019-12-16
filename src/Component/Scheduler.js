import React from "react";
import { Card } from "react-bootstrap";
import Fullcalendar from "./Fullcalendar";
export default class Scheduler extends React.Component {
  state = {
    calendarEvents: [
      // initial event data

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
        backgroundColor: "red"
      },
      {
        Id: 1,
        title: "Effel Tower",
        orderID: 451515,
        start: new Date(2019, 11, 15, 10, 0),
        end: new Date(2019, 11, 15, 12, 30),
        status: "Assesed",
        appointmentTime: new Date(2019, 11, 15),
        integratorAdmin: "mohammed",
        integratorTeam: "salman But",
        backgroundColor: "red"
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
        backgroundColor: "Yellow"
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
        backgroundColor: "green"
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
        backgroundColor: "grey"
      },
      {
        Id: 4,
        title: "Catacombs",
        orderID: 84848,
        start: new Date(2019, 11, 17, 10, 0),
        end: new Date(2019, 11, 17, 12, 30),
        status: "Completed",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        backgroundColor: "green"
      },
      {
        Id: 4,
        title: "Riyas",
        orderID: 84848,
        start: new Date(2019, 11, 17, 10, 0),
        end: new Date(2019, 11, 17, 12, 30),
        status: "Pending",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        backgroundColor: "Yellow"
      },
      {
        Id: 4,
        title: "ellaman",
        orderID: 84848,
        start: new Date(2019, 11, 17, 10, 0),
        end: new Date(2019, 11, 17, 12, 30),
        status: "Assesed",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        backgroundColor: "red"
      }
    ]
  };
  render() {
    let { calendarEvents } = this.state;
    return (
      <div class="col-md-12">
        <div class="row">
          <div calss="col-md-6">
            <h2></h2>
          </div>
          <div class="col-md-10" style={{ padding: "3%", float: "right" }}>
            <Card style={{ width: "90%", padding: "3%" }}>
              <div class="col-md-12">
                <div class="row">
                  <div class="row-md-2">
                    <label style={{ color: "red" }}>Scheduler &nbsp;</label>
                    <label> &nbsp;PPM Schedule &nbsp;</label>
                    <label>&nbsp;Allcompany&nbsp;</label>
                  </div>
                  <div class="col-md-1">
                    <label>Schedule &nbsp;</label>
                  </div>
                  <div class="col-md-1">
                    <label>&nbsp;Assesed &nbsp;</label>
                  </div>
                  <div class="col-md-1">
                    <label>Installed &nbsp;</label>
                  </div>
                  <div class="col-md-1">
                    <label>Pending</label>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <Fullcalendar data={calendarEvents} />
              </div>

              <br />

              <div>
                <div className="d-flex flex-wrap">
                  {calendarEvents.map(item => {
                    return (
                      <div className="p-1">
                        <label
                          className="p-2"
                          style={{
                            // width: "30%",
                            background:
                              item.status === "Assesed"
                                ? "red"
                                : item.status === "Pending"
                                ? "yellow"
                                : item.status === "Completed"
                                ? "green"
                                : item.status === "Inprogress"
                                ? "grey"
                                : null
                          }}
                        >
                          {item.title}&nbsp;&nbsp;
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
