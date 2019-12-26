import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import listPlugin from "@fullcalendar/list";
import "../App.css";
//import Select from "react-select";
// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import swal from "sweetalert";
import ReactDOM from "react-dom";
import Event, { eventNewDiv } from "./EventChangeing";
// import { Card,ListGroup,Modal,Button } from 'react-bootstrap';
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
//import ListItem from '@material-ui/core/ListItem';
import Dialog from "@material-ui/core/Dialog";
import { Collapse } from "reactstrap";
import Slide from "@material-ui/core/Slide";
var moment = require("moment");

moment().format();
//import ListItemText from '@material-ui/core/ListItemText';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class DemoApp extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    show: false,
    isOpen: false,
    // integratorAdmin: [
    //   { label: "ali", value: 1 },
    //   { label: "abdullah", value: 2 },
    //   { label: "mohammed", value: 3 },
    //   { label: "sherif", value: 4 },
    //   { label: "teja", value: 5 },
    //   { label: "bai", value: 6 }
    // ],
    SelectedBuilding: [],
    calendarWeekends: true,
    calendarEvents: ""
  };
  componentDidMount() {
    let { data } = this.props;
    console.log("after fullcalendar", data);
    this.setState({ calendarEvents: data });
  }
  setEventByCalendar = calEvent => {
    let { calendarEvents, show } = this.state;
    console.log(calEvent.event._def.extendedProps);
    var selectedDate = calEvent.event._def.extendedProps.appointmentTime;
    console.log("selectedDate", selectedDate,calendarEvents);

    let SelectedBuilding1 = [];

SelectedBuilding1.push(calEvent.event._def.extendedProps)
    // calendarEvents.filter(item => {
    //   console.log(
    //     "inside filter",
    //     moment(item.appointmentTime).format("YYYY-MM-DD"),
    //     moment(selectedDate).format("YYYY-MM-DD")
    //   );
    //   console.log("sas", item.appointmentTime === selectedDate);
    //   if (
    //     moment(item.appointmentTime).format("YYYY-MM-DD") ===
    //     moment(selectedDate).format("YYYY-MM-DD")
    //   ) {
    //     console.log("inside item====>>>", item);

    //     if (item.appointmentTime === selectedDate) {
    //       SelectedBuilding1.push(item);
    //     }
    //   } else {
    //   }
    // });
    console.log("SelectedBuilding=======>>>", SelectedBuilding1);

    this.setState({ SelectedBuilding: SelectedBuilding1, show: !show });

    // this.setState(prevState => ({
    //   show: !prevState.show,

    // }));
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  toggle = () => {
    let { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };
  handleDateClick = calEvent => {
    let { calendarEvents, show,SelectedBuilding } = this.state;
    console.log(calEvent.date);
    var ShowEntireData = calEvent.date;
    console.log("ffff-->>>", SelectedBuilding);
    var selectedDates = [];
    calendarEvents.find(obj => {
      if (
        moment(obj.appointmentTime).format("YYYY-MM-DD") ===
        moment(ShowEntireData).format("YYYY-MM-DD")
      ) {
        console.log("inside condition")
        selectedDates.push("selectedDates");
      }
    });
    console.log("ffff", selectedDates);
    if (selectedDates[0] === "selectedDates") {
      console.log(ShowEntireData);
      let SelectedBuilding = [];
      calendarEvents.filter(item => {
        moment(item.appointmentTime).format("YYYY-MM-DD");
        console.log(
          "checkkkk==>>>",
          moment(item.appointmentTime).format("YYYY-MM-DD"),
          item.appointmentTime === ShowEntireData
        );
        if (
          moment(item.appointmentTime).format("YYYY-MM-DD") ===
          moment(ShowEntireData).format("YYYY-MM-DD")
        ) {
          console.log("inside filter", item);
          SelectedBuilding.push(item);
        }
      });
      this.setState({ SelectedBuilding: SelectedBuilding, show: !show });
    } else {
      swal("Unable to add events");
    }
  };
  getRenderDetails = info => {
    console.log("info", info);
    var tooltip =
      (info.el,
      {
        title: info.event.extendedProps.description,
        placement: "top",
        trigger: "hover",
        container: "body"
      });
    console.log("tooltip", tooltip);
  };

  render() {
    let { data } = this.props;

    let {
      calendarEvents,
      show,
      isOpen,
      SelectedBuilding
      //integratorAdmin
    } = this.state;

    return (
      <div>
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
              events={data}
              // eventRender={info => {
              //   return (
              //     <div className="fc-content">
              //       <span className="fc-title">{info.event.title}</span>
              //     </div>
              //   );
              //   //return info.el
              // }}
              eventRender={eventNewDiv}
              // eventRender={this.getRenderDetails}
              // eventClick={function(calEvent, jsEvent, view, resourceObj) {
              //   console.log(calEvent.event._def);
              // }}
              eventClick={this.setEventByCalendar}
              dateClick={this.handleDateClick}
            />
          </div>
        </div>

        <div className="w-75 p-3">
          <Dialog
            onClose={this.handleClose}
            //class="overalldialogue"
            open={show}
            TransitionComponent={Transition}
            keepMounted
            //onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            contentStyle={{ width: "100%", maxWidth: "none" }}
            // aria-labelledby="simple-dialog-title"
            //open={show}
          >
            <div className="w-100 p-4">
              <DialogTitle id="alert-dialog-slide-title">COMPANIES</DialogTitle>
              <List>
                {SelectedBuilding.map(obj => {
                  return (
                    <div>
                      <label
                        onClick={this.toggle}
                        style={{
                          width: "100%",

                          background:
                            obj.status === "Assessed"
                              ? "red"
                              : obj.status === "Pending"
                              ? "Yellow"
                              : obj.status === "Inprogress"
                              ? "grey"
                              : obj.status === "Completed"
                              ? "green"
                              : null
                        }}
                      >
                        <font
                          style={{
                            color: "white",
                            marginLeft: "6%",
                            width: "100%"
                          }}
                        >
                          {obj.companyName}
                        </font>
                      </label>

                      <Collapse isOpen={isOpen}>
                        <table
                          style={{ marginLeft: "5%", paddingHorizontal: "3%" }}
                        >
                          <tbody>
                            <tr>
                              <th style={{ fontSize: 14 }}>Building Name</th>
                            </tr>
                            <tr>
                              <input
                                name="orderId"
                                className="inputTextBox"
                                style={{ width: "90%" }}
                                type="text"
                                value={obj.BuildingName}
                              />
                            </tr>
                            <tr>
                              <th style={{ fontSize: 14 }}>Order ID</th>
                            </tr>
                            <tr>
                              <input
                                name="orderId"
                                type="text"
                                value={obj.order_id}
                              />
                            </tr>
                            <tr>
                              <th style={{ fontSize: 14 }}>Status</th>
                            </tr>
                            <tr>
                              <input
                                name="buildingName"
                                type="text"
                                value={obj.status}
                              />
                            </tr>

                            <tr>
                              <th style={{ fontSize: 14 }}>Appointment Time</th>
                            </tr>
                            <tr>
                              <input
                                name="buildingName"
                                type="text"
                                value={moment(obj.appointmentTime).format(
                                  "YYYY-MM-DD HH:mm:ss"
                                )}
                                //value={JSON.stringify(obj.appointmentTime)}
                              />
                            </tr>
                            <tr>
                              <th style={{ fontSize: 14 }}>Integrator Admin</th>
                            </tr>
                            <tr>
                              {/*} <Select
                            options={integratorAdmin}
                            style={{ width: "60%" }}
              />*/}
                              <input
                                name="buildingName"
                                type="text"
                                value={obj.integratorAdmin}
                              />
                            </tr>
                            <tr>
                              <th style={{ fontSize: 14 }}>Integrator Team</th>
                            </tr>
                            <tr>
                              <input
                                name="buildingName"
                                type="text"
                                value={obj.integratorTeam}
                              />
                            </tr>
                          </tbody>
                        </table>
                      </Collapse>
                    </div>
                  );
                })}
              </List>
            </div>
          </Dialog>
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
}
