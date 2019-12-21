import React, { useEffect, useRef } from "react";
import ReactDOM, { createPortal, render } from "react-dom";
import styled from "@emotion/styled";
import "../App.css";
import Avatar from "@material-ui/core/Avatar";

// This is only a wrapper so the component reads nicer in React Debugger. It is completely unnecessary.
export const EventDetail = ({ ...props }) => (
  <StyledEvent>{props.children}</StyledEvent>
);

export const EventContent = ({ event }) => {
  console.log("event", event._def.extendedProps.BuildingName);
  var totalStatus = event._def.extendedProps.status;
  console.log("totalStatus", event._def);

  // extendedProps is used to access additional event properties.
  return (
    <div
      className="d-flex"
      style={{
        justifyContent: "space-between",
        background: event._def.extendedProps.backgroundColorCompany,
        width: "100%",
        height: 20
      }}
    >
      <p className="ml-1">{event.title}</p>
      <label className="mr-1">
        {totalStatus === "Assesed" ? (
          <Avatar
            style={{
              backgroundColor: "black",
              width: "18px",
              height: 20,
              //marginLeft: "15%",

              fontSize: "0.9rem"
            }}
          >
            A
          </Avatar>
        ) : totalStatus === "Pending" ? (
          <Avatar
            style={{
              backgroundColor: "black",
              width: "18px",
              height: 20,
              //marginLeft: "15%",

              fontSize: "0.9rem"
            }}
          >
            P
          </Avatar>
        ) : totalStatus === "Completed" ? (
          <Avatar
            style={{
              backgroundColor: "black",
              width: "18px",
              height: 20,

              fontSize: "0.9rem"
            }}
          >
            I
          </Avatar>
        ) : totalStatus === "Inprogress" ? (
          <Avatar
            style={{
              backgroundColor: "black",
              width: "18px",
              height: 20,

              fontSize: "0.9rem"
            }}
          >
            S
          </Avatar>
        ) : null}
      </label>
    </div>
  );
};

const Event = ({ event, el }) => {
  // This Event is wrapped in the default `el` which is a <a href=""/>
  // This cannot be used with React Router Link which uses it's own <a href=""/>
  ReactDOM.render(<EventContent event={event} />, el);
  return el;
};

/*
There is a major necessity to be able to render a React component within the React <App/>.
*/
export const eventNewDiv = ({ event, el, view }) => {
  console.log("dfdsfs", view.calendar.getOption("contextValues"));
  // Creating `div` to replace the default <a href=""/> for event
  const eventDiv = document.createElement("div");
  // Get classes on the default `a.fc-timeline-event`
  const classes = Array.from(el.classList);
  // Add classes to the new `div`
  eventDiv.classList.add(...classes);

  ReactDOM.render(<EventContent event={event} />, eventDiv);

  return eventDiv;
};

export default Event;

const StyledBaseEvent = styled("div")`
  min-height: 2px;
  min-width: 10px;
  padding: 1px 1px 1px;
  line-height: 0.6;
  margin-left: 13%;
  margin-top: 3%;
  .fc-event,
  .fc-event-dot {
     background-color:"";  !important
  }

  .fc-event {
    /* position: relative; */
    /* display: block; */
    /* font-size: 0.85em; */
    /* line-height: 1.4; */
    /* border-radius: 3px; */
    /* border: 1px solid #3788d8; */
  }
`;

const StyledEvent = styled(StyledBaseEvent)`
  position: relative;
  z-index: 1;

  h3 {
    padding: 0;
    margin: 0;
  }
`;
