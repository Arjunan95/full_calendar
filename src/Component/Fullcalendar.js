import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import listPlugin from "@fullcalendar/list";
import "../App.css";
import Select from 'react-select';
// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

// import { Card,ListGroup,Modal,Button } from 'react-bootstrap';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
import Dialog from '@material-ui/core/Dialog';
import { Collapse} from 'reactstrap';
//import ListItemText from '@material-ui/core/ListItemText';



export default class DemoApp extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    show:false,
    isOpen:{},
    integratorAdmin : [
      { label: "ali", value: 1 },
      { label: "abdullah", value: 2 },
      { label: "mohammed", value: 3 },
      { label: "sherif", value: 4 },
      { label: "teja", value: 5 },
      { label: "bai", value: 6 },
    ],
    SelectedBuilding:[],
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
  setEventByCalendar = (calEvent) => {

let {calendarEvents,SelectedBuilding}=this.state
    console.log(calEvent.event._def.extendedProps);
    var selectedDate=calEvent.event._def.extendedProps.orderID
    console.log("selectedDate",selectedDate)

    //var SelectedBuilding=[]

    var found = calendarEvents.find(item=>{
      console.log("check",item.orderID,selectedDate) 
      console.log("sas",item.orderID == selectedDate)
      if (item.orderID == selectedDate){
        console.log("item",item)
       
        SelectedBuilding.push(item)
      }
    })
    console.log("SelectedBuilding",found,SelectedBuilding)

this.setState({SelectedBuilding:SelectedBuilding,show:true})


  // this.setState(prevState => ({
  //   show: !prevState.show,
    
  // }));
  
  };
//     setEventByCalendar = data => {
//       console.log(data);
//       var event = [];
//       var col = "";
//       if (data.status === "Assessed") {
//         col = "red";
//       } else if (data.status === "Pending") {
//         col = "Yellow";
//       } else if (data.status === "Completed") {
//         col = "green";
//       } else if (data.status === "Inprogress") {
//         col = "grey";
//       }
//       event.push({
//         title: data.title,
//         start: "2019-11-22",
//         backgroundColor: col,
//         textColor: "black"
//       });
//       return(<div>
//         <Card style={{ width: '18rem' }}>
//   <ListGroup variant="flush">
//     <ListGroup.Item>Cras justo odio</ListGroup.Item>
//     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//   </ListGroup>
// </Card>
//       </div>)
//     }

  //     // let { calendarEvents } = this.state;
  //     //this.setState({ calendarEvents: calendarEvents });
  //   };

  handleClose= ()=>{
    this.setState({show:false})
  }
  toggle=()=>{
let {isOpen}=this.state
this.setState({isOpen:!isOpen})
  }
  render() {
    let { calendarEvents,show,isOpen,SelectedBuilding,integratorAdmin } = this.state;
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
            // eventClick={function(calEvent, jsEvent, view, resourceObj) {
            //   console.log(calEvent.event._def);
            // }}
            eventClick={this.setEventByCalendar}


            dateClick={this.handleDateClick}
          />
          
         
       
      </div>
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={show}>
      <DialogTitle id="simple-dialog-title">Company</DialogTitle>
      <List>
     {SelectedBuilding.map(obj=>{
return(      <div>

<DialogTitle id="simple-dialog-title"  onClick={this.toggle} >{obj.status}</DialogTitle>

        
      
       <Collapse
       isOpen={
         isOpen
       }
     >
<table style={{marginLeft:"5%",paddingHorizontal:"3%"}}>
  <tbody>
<tr>
<th>Building Name</th>
</tr>
<tr>
<input name="orderId"   type="text" value={obj.title}/>
      
</tr>
<tr>
<th>Order ID</th>
</tr>
<tr>
<input name="orderId"   type="text" value={obj.orderID}/>
      
</tr>
<tr>
<th>Status</th>
</tr>
<tr>
  <input name="buildingName"   type="text" value={obj.status}/>
      
</tr>

<tr>
<th>Appointment Time</th>
</tr>
<tr>
<input name="buildingName"   type="text" value={JSON.stringify(obj.appointmentTime)}/>
    
</tr>
<tr>
<th>Integrator Admin</th>
</tr>
<tr>
<Select  options={ integratorAdmin } style={{width:"60%"}}  />

     
</tr>
<tr>
<th>Integrator Team</th>
</tr>
<tr>
<input name="buildingName"   type="text" value={JSON.stringify(obj.integratorTeam)}/>
     
</tr>
  </tbody>
</table>
</Collapse>

      </div>)
     })}
     </List>
    </Dialog>
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
