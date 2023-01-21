// Display the current day at the top of the calender when a user opens the planner.
   //moment.js for current time.
function updateTime() {
    var today = moment().format('h:mm A DD/MMM/YYYY');
    document.getElementById("currentDay").innerHTML = today;
  }
  setInterval(updateTime, 1000);

//   $(document).ready(function(){
//     $('.editable').dblclick(function(){
//       var currentText = $(this).text();
//       $(this).html("<input type='text' value='" + currentText + "'>");
//       $(this).find("input").show().focus();
//     });
    
//     $(document).on("focusout", "td.editable", function(){
//       var newText = $(this).find("input").val();
//       $(this).text(newText);
//     });
//   });





  
//save button
let textInput = document.getElementById("text-input");
let saveButton = document.getElementById("save-button");
// let savedTextDiv = document.getElementById("saved-text");

// Save text to local storage when save button is clicked
saveButton.addEventListener("click", function() {
    localStorage.setItem("savedText", textInput.value);
});

// Retrieve saved text from local storage and display it on page load
window.onload = function() {
    let savedText = localStorage.getItem("savedText");
    if (savedText) {
        textInput.value = savedText;
       
    }
};









// Add time blocks for business hours (9 am to 5 pm)
   // these time blocks need to be editable with text.
   // add a save even button at the end of each event.
   // Time| Event| Save.
   // the event should be saved on a local storage when the save button is clicked.
//color code events (grey = hours past, red =  set events, green = empty events )