import React from "react";
import { Card } from "react-bootstrap";
import Fullcalendar from "./Fullcalendar";
import Avatar from "@material-ui/core/Avatar";
import Select from "react-select";
import _ from "lodash";
import swal from "sweetalert";
export default class Scheduler extends React.Component {
  state = {
    dupCalendarEvents: "",
    getentirecompany: [],
    selectedOption: "",
    options: "",
    checkCompanyName: "All",
    calendarEvents: [
      // initial event data

      {
        Id: 1,

        title: "A90901",
        BuildingName: "Burj kalifa",
        //orderID: 451515,
        start: new Date(2019, 11, 22, 10, 0),
        end: new Date(2019, 11, 22, 12, 30),
        status: "Assesed",
        appointmentTime: new Date(2019, 11, 15),
        integratorAdmin: "mohammed",
        integratorTeam: "salman But",
        //backgroundColor: "red",
        backgroundColorCompany: "red",
        companyName: "UST",
        description: "long description"
      },
      {
        Id: 1,
        title: "A1204",
        BuildingName: "Effel Tower",
        //orderID: 451515,
        start: new Date(2019, 11, 22, 10, 0),
        end: new Date(2019, 11, 22, 12, 30),
        status: "Pending",
        appointmentTime: new Date(2019, 11, 15),
        integratorAdmin: "mohammed",
        integratorTeam: "salman But",
        backgroundColorCompany: "red",
        // backgroundColor: "red",
        companyName: "UST"
      },
      {
        Id: 2,
        title: "A1444",
        BuildingName: "Thule Air Crash Report",
        //orderID: 21512,
        start: new Date(2019, 11, 23, 10, 0),
        end: new Date(2019, 11, 23, 12, 30),
        status: "Pending",
        appointmentTime: new Date(2019, 11, 16),
        integratorAdmin: "Ajmal",
        integratorTeam: "akmal",
        //backgroundColor: "green",

        backgroundColorCompany: "green",
        companyName: "Firex"
      },
      {
        Id: 3,
        title: "A43504",
        BuildingName: "Blue Moon Eclipse",
        //orderID: 336221,
        start: new Date(2019, 11, 24, 10, 0),
        end: new Date(2019, 11, 17, 24, 30),
        status: "Completed",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Riyas",
        integratorTeam: "rashid khan",
        //backgroundColor: "orange",
        backgroundColorCompany: "orange",
        companyName: "INT"
      },
      {
        Id: 4,
        title: "A04204",
        BuildingName: "Meteor Showers in 2018",
        // orderID: 84848,
        start: new Date(2019, 11, 24, 10, 0),
        end: new Date(2019, 11, 24, 12, 30),
        status: "Inprogress",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        backgroundColorCompany: "#0678be",
        //backgroundColor: "#0678be",
        companyName: "Saaj"
      },
      {
        Id: 4,
        title: "A8804",
        BuildingName: "Catacombs",
        //orderID: 84848,
        start: new Date(2019, 11, 124, 10, 0),
        end: new Date(2019, 11, 124, 12, 30),
        status: "Completed",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        backgroundColorCompany: "#0678be",
        // backgroundColor: "#0678be",
        companyName: "Saaj"
      },
      {
        Id: 4,
        title: "A15604",
        BuildingName: "Riyas",
        //orderID: 84848,
        start: new Date(2019, 11, 24, 10, 0),
        end: new Date(2019, 11, 24, 12, 30),
        status: "Pending",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        backgroundColorCompany: "orange",
        //backgroundColor: "orange",
        companyName: "INT"
      },
      {
        Id: 4,
        title: "A6574",
        BuildingName: "ellaman",
        //orderID: 84848,
        start: new Date(2019, 11, 26, 10, 0),
        end: new Date(2019, 11, 26, 12, 30),
        status: "Assesed",
        appointmentTime: new Date(2019, 11, 17),
        integratorAdmin: "Abdullah",
        integratorTeam: "shakib",
        //backgroundColor: "green",
        backgroundColorCompany: "green",
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
    let { calendarEvents, checkCompanyName } = this.state;

    var getEntireCompany = calendarEvents.map(item => {
      var getentireCompanyBackground = {};
      getentireCompanyBackground["companyName"] = item.companyName;
      getentireCompanyBackground["backgroundColorCompany"] =
        item.backgroundColorCompany;
      return getentireCompanyBackground;
    });
    var arrset = Array.from(new Set(getEntireCompany));
    console.log("getEntireCompany", arrset);
    // var grades = {};
    // var gradesArr = [];
    // getEntireCompany.forEach(function(item) {
    //   var grade = (grades[item.companyName] = grades[item.companyName] || {});
    //   grade["backgroundColor"] = item.backgroundColorCompany;
    // });
    // gradesArr.push(grades);

    var getUniqueArr = [];
    getEntireCompany.map(item => {
      var getUniqueJson = {};
      getUniqueJson["companyname"] = item.companyName;
      getUniqueJson["backgroundColor"] = item.backgroundColorCompany;
      getUniqueArr.push(getUniqueJson);
    });
    console.log("getUniqueArr---->>>", getUniqueArr);

    const res = _.uniqBy(getUniqueArr, "companyname");
    console.log("ressss---->>>", res);

    //console.log("grades", grades, gradesArr);

    //getcompany name
    var onlyCompanyNameArr = [];
    calendarEvents.map(item => {
      var onlyCompanyName = {};

      onlyCompanyName["label"] = item.companyName;
      onlyCompanyName["value"] = item.companyName;
      onlyCompanyNameArr.push(onlyCompanyName);
    });
    onlyCompanyNameArr.push({ label: "All", value: "All" });
    //var arrset1 = Array.from(new Set(onlyCompanyNameArr));
    console.log("onlyCompanyName======>>>>", onlyCompanyNameArr);

    const res1 = _.uniqBy(onlyCompanyNameArr, "label");
    console.log("res1---->>>", res1);

    this.setState({ getentirecompany: res, options: res1 });
  };

  getFilterStatus = data => {
    let { calendarEvents, dupCalendarEvents, checkCompanyName } = this.state;
    console.log("schedule------->>>", data);
    console.log("checkCompanyName===>>>", checkCompanyName);
    // var dupCalendarEvents = calendarEvents;
    //getSelectedcompany details===========>
    if (checkCompanyName !== "All") {
      var getSelectedCompanyDetails = [];
      dupCalendarEvents.filter(item => {
        if (item.companyName === checkCompanyName) {
          if (item.status === data) {
            getSelectedCompanyDetails.push(item);
          }
        }
      });
      if (getSelectedCompanyDetails.length === 0) {
        swal(data + " is not in this company");
      } else {
        console.log("ddjddjddj", getSelectedCompanyDetails);
        this.setState({ calendarEvents: getSelectedCompanyDetails });
      }
    } else {
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
    }
  };
  handleChange = selectedOption => {
    let { dupCalendarEvents, calendarEvents } = this.state;
    const val = selectedOption.value;

    var scheduledArr = [];
    if (val === "All") {
      this.setState({
        calendarEvents: dupCalendarEvents,
        checkCompanyName: val
      });
    } else {
      dupCalendarEvents.filter(item => {
        if (item.companyName === val) {
          scheduledArr.push(item);
        }
      });
      console.log("scheduledArr inside", scheduledArr.companyName);
      this.setState({ calendarEvents: scheduledArr, checkCompanyName: val });
    }

    //this.setState({ calendarEvents: scheduledArr });

    console.log("val===>>>", val);
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    let {
      calendarEvents,
      getentirecompany,
      selectedOption,
      options
    } = this.state;
    console.log("calendarEvents===>>>", calendarEvents);
    return (
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-10" style={{ padding: "3%", float: "right" }}>
            <Card style={{ width: "90%", padding: "3%" }}>
              <div className="d-flex flex-wrap">
                <label style={{ color: "red" }}>Scheduler &nbsp;</label>
                <label style={{ color: "grey" }}>
                  {" "}
                  &nbsp;PPM Schedule&nbsp;
                </label>
                <div className="col-md-3">
                  <Select
                    style={{ backgroundColor: "black", zIndex: -1 }}
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                  >
                    <option style={{ background: "red" }}>{options}</option>
                  </Select>
                </div>
                <div
                  className="col-md-1 d-flex flex-wrap"
                  onClick={() => this.getFilterStatus("Inprogress")}
                >
                  <Avatar
                    alt="Remy Sharp"
                    className="ml-2"
                    //onClick={() => this.getFilterStatus("Inprogress")}
                    style={{
                      backgroundColor: "black",
                      cursor: "pointer",
                      textAlign: "center"
                    }}
                  >
                    S
                  </Avatar>
                  <label style={{ cursor: "pointer" }}>
                    &nbsp;Schedule &nbsp;
                  </label>
                </div>
                <div
                  className="col-md-1 d-flex flex-wrap"
                  onClick={() => this.getFilterStatus("Assesed")}
                >
                  <Avatar
                    alt="Remy Sharp"
                    className="ml-2"
                    //onClick={() => this.getFilterStatus("Inprogress")}
                    style={{
                      backgroundColor: "black",
                      cursor: "pointer",
                      textAlign: "center"
                    }}
                  >
                    A
                  </Avatar>
                  <label
                    style={{ cursor: "pointer" }}
                    // onClick={() => this.getFilterStatus("Assesed")}
                  >
                    &nbsp;Assesed &nbsp;
                  </label>
                </div>
                <div
                  className="col-md-1 d-flex flex-wrap"
                  onClick={() => this.getFilterStatus("Completed")}
                >
                  <Avatar
                    alt="Remy Sharp"
                    className="ml-2"
                    //onClick={() => this.getFilterStatus("Inprogress")}
                    style={{
                      backgroundColor: "black",
                      cursor: "pointer",
                      textAlign: "center"
                    }}
                  >
                    I
                  </Avatar>
                  <label style={{ cursor: "pointer" }}>
                    &nbsp;Installed &nbsp;
                  </label>
                </div>
                <div
                  className="col-md-1 d-flex flex-wrap"
                  onClick={() => this.getFilterStatus("Pending")}
                >
                  <Avatar
                    alt="Remy Sharp"
                    className="ml-2"
                    //onClick={() => this.getFilterStatus("Inprogress")}
                    style={{
                      backgroundColor: "black",
                      cursor: "pointer",
                      textAlign: "center"
                    }}
                  >
                    P
                  </Avatar>
                  <label style={{ cursor: "pointer" }}>
                    &nbsp;Pending &nbsp;
                  </label>
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
                            background: item.backgroundColor
                          }}
                        >
                          {item.companyname}
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
