// Display the current day at the top of the calender when a user opens the planner.
   //moment.js for current time.
   var today = moment();
   $("#currentDay").text(today.format('h:mm A DD/MMM/YYYY'))



 





// Add time blocks for business hours (9 am to 5 pm)
   // these time blocks need to be editable with text.
   // add a save even button at the end of each event.
   // Time| Event| Save.
   // the event should be saved on a local storage when the save button is clicked.
//color code events (grey = hours past, red =  set events, green = empty events )