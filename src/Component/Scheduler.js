import React from "react";
import { Card } from "react-bootstrap";
import Fullcalendar from "./Fullcalendar";
export default class Scheduler extends React.Component {
  state = {
    dupCalendarEvents: "",
    getentirecompany: [],
    calendarEvents: [
      // initial event data

      {
        Id: 1,

        title: "A90901",
        BuildingName: "Burj kalifa",
        //orderID: 451515,
        start: new Date(2019, 11, 15, 10, 0),
        end: new Date(2019, 11, 15, 12, 30),
        status: "Assesed",
        appointmentTime: new Date(2019, 11, 15),
        integratorAdmin: "mohammed",
        integratorTeam: "salman But",
        backgroundColor: "red",
        companyName: "UST",
        description: "long description"
      },
      {
        Id: 1,
        title: "A1204",
        BuildingName: "Effel Tower",
        //orderID: 451515,
        start: new Date(2019, 11, 15, 10, 0),
        end: new Date(2019, 11, 15, 12, 30),
        status: "Assesed",
        appointmentTime: new Date(2019, 11, 15),
        integratorAdmin: "mohammed",
        integratorTeam: "salman But",
        backgroundColor: "red",
        companyName: "UST"
      },
      {
        Id: 2,
        title: "A1444",
        BuildingName: "Thule Air Crash Report",
        //orderID: 21512,
        start: new Date(2019, 11, 16, 10, 0),
        end: new Date(2019, 11, 16, 12, 30),
        status: "Pending",
        appointmentTime: new Date(2019, 11, 16),
        integratorAdmin: "Ajmal",
        integratorTeam: "akmal",
        backgroundColor: "green",
        companyName: "Firex"
      },
      {
        Id: 3,
        title: "A15504",
        BuildingName: "Blue Moon Eclipse",
        //orderID: 336221,
        start: new Date(2019, 11, 17, 10, 0),
        end: new Date(2019, 11, 17, 12, 30),
        status: "Completed",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Riyas",
        integratorTeam: "rashid khan",
        backgroundColor: "orange",
        companyName: "INT"
      },
      {
        Id: 4,
        title: "A04204",
        BuildingName: "Meteor Showers in 2018",
        // orderID: 84848,
        start: new Date(2019, 11, 17, 10, 0),
        end: new Date(2019, 11, 17, 12, 30),
        status: "Inprogress",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        backgroundColor: "#0678be",
        companyName: "Saaj"
      },
      {
        Id: 4,
        title: "A8804",
        BuildingName: "Catacombs",
        //orderID: 84848,
        start: new Date(2019, 11, 17, 10, 0),
        end: new Date(2019, 11, 17, 12, 30),
        status: "Completed",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        backgroundColor: "#0678be",
        companyName: "Saaj"
      },
      {
        Id: 4,
        title: "A15504",
        BuildingName: "Riyas",
        //orderID: 84848,
        start: new Date(2019, 11, 17, 10, 0),
        end: new Date(2019, 11, 17, 12, 30),
        status: "Pending",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        backgroundColor: "orange",
        companyName: "INT"
      },
      {
        Id: 4,
        title: "A6574",
        BuildingName: "ellaman",
        //orderID: 84848,
        start: new Date(2019, 11, 17, 10, 0),
        end: new Date(2019, 11, 17, 12, 30),
        status: "Assesed",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        backgroundColor: "green",
        companyName: "Firex"
      }
    ]
  };
  componentDidMount() {
    let { calendarEvents } = this.state;
    this.state.dupCalendarEvents = calendarEvents;
    this.getCompanyName();
    // this.setState({ dupCalendarEvents: calendarEvents });
  }
  getCompanyName = () => {
    let { calendarEvents } = this.state;

    var getEntireCompany = calendarEvents.map(item => {
      return item.companyName;
    });
    var arrset = Array.from(new Set(getEntireCompany));
    console.log("getEntireCompany", arrset);
    this.setState({ getentirecompany: arrset });
  };

  getFilterStatus = data => {
    let { calendarEvents, dupCalendarEvents } = this.state;
    console.log("schedule------->>>", data);
    // var dupCalendarEvents = calendarEvents;
    var scheduledArr = [];
    if (data === "Assesed") {
      dupCalendarEvents.filter(item => {
        if (item.status === "Assesed") {
          scheduledArr.push(item);
        }
      });
      console.log("scheduledArr", scheduledArr);
      this.setState({ calendarEvents: scheduledArr });
    } else if (data === "Inprogress") {
      dupCalendarEvents.filter(item => {
        if (item.status === "Inprogress") {
          scheduledArr.push(item);
        }
      });
      console.log("scheduledArr", scheduledArr);
      this.setState({ calendarEvents: scheduledArr });
    } else if (data === "Pending") {
      dupCalendarEvents.filter(item => {
        if (item.status === "Pending") {
          scheduledArr.push(item);
        }
      });
      console.log("scheduledArr", scheduledArr);
      this.setState({ calendarEvents: scheduledArr });
    } else if (data === "Completed") {
      dupCalendarEvents.filter(item => {
        if (item.status === "Completed") {
          scheduledArr.push(item);
        }
      });
      console.log("scheduledArr", scheduledArr);
      this.setState({ calendarEvents: scheduledArr });
    } else {
      this.setState({ calendarEvents: calendarEvents });
    }
  };
  render() {
    let { calendarEvents, getentirecompany } = this.state;
    console.log("calendarEvents===>>>", calendarEvents);
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
                    <label
                      style={{ cursor: "pointer" }}
                      onClick={() => this.getFilterStatus("Inprogress")}
                      //onClick={this.getInprogress}
                    >
                      Schedule &nbsp;
                    </label>
                    <br></br>
                  </div>
                  <div class="col-md-1">
                    <label
                      style={{ cursor: "pointer" }}
                      onClick={() => this.getFilterStatus("Assesed")}
                    >
                      &nbsp;Assesed &nbsp;
                    </label>
                  </div>
                  <div class="col-md-1">
                    <label
                      style={{ cursor: "pointer" }}
                      onClick={() => this.getFilterStatus("Completed")}
                    >
                      Installed &nbsp;
                    </label>
                  </div>
                  <div class="col-md-1">
                    <label
                      style={{ cursor: "pointer" }}
                      onClick={() => this.getFilterStatus("Pending")}
                    >
                      Pending
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <Fullcalendar data={calendarEvents} />
              </div>

              <br />

              <div>
                <div className="d-flex flex-wrap">
                  {getentirecompany.map(item => {
                    return (
                      <div className="p-1">
                        <label
                          className="p-2"
                          style={{
                            // width: "30%",
                            background:
                              item === "UST"
                                ? "red"
                                : item === "INT"
                                ? "orange"
                                : item === "Firex"
                                ? "green"
                                : item === "Saaj"
                                ? "#0678be"
                                : null
                          }}
                        >
                          {item}
                          &nbsp;&nbsp;
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
