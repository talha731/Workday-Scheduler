// Display the current day at the top of the calender when a user opens the planner.
   //moment.js for current time.
function updateTime() {
    var today = moment().format('h:mm A DD/MMM/YYYY');
    document.getElementById("currentDay").innerHTML = today;
  }
  setInterval(updateTime, 1000);

 




  
//save button
  const input1 = document.getElementById("text-input1");
  const input2 = document.getElementById("text-input2");
  const input3 = document.getElementById("text-input3"); 
  const input4 = document.getElementById("text-input4"); 
  const input5 = document.getElementById("text-input5"); 
  const input6 = document.getElementById("text-input6"); 
  const input7 = document.getElementById("text-input7"); 
  const input8 = document.getElementById("text-input8"); 
  const input9 = document.getElementById("text-input9");
  const save1 = document.getElementById("save-button1");
  const save2 = document.getElementById("save-button2");
  const save3 = document.getElementById("save-button3");
  const save4 = document.getElementById("save-button4");
  const save5 = document.getElementById("save-button5");
  const save6 = document.getElementById("save-button6");
  const save7 = document.getElementById("save-button7");
  const save8 = document.getElementById("save-button8");
  const save9 = document.getElementById("save-button9");

  // Get reference to the element where saved values will be displayed
  const savedValues = document.getElementById("savedValues");

  // Create event listeners for the save buttons
  save1.addEventListener("click", function() {
    // Save the value of the first input field in local storage
    localStorage.setItem("text-input1", input1.value);
  });

  save2.addEventListener("click", function() {
    // Save the value of the second input field in local storage
    localStorage.setItem("text-input2", input2.value);
  });
  save3.addEventListener("click", function() {
    // Save the value of the first input field in local storage
    localStorage.setItem("text-input3", input3.value);
  });
   save4.addEventListener("click", function() {
    // Save the value of the first input field in local storage
    localStorage.setItem("text-input4", input4.value);
  }); 
  save5.addEventListener("click", function() {
    // Save the value of the first input field in local storage
    localStorage.setItem("text-input5", input5.value);
  });
   save6.addEventListener("click", function() {
    // Save the value of the first input field in local storage
    localStorage.setItem("text-input6", input6.value);
  });
   save7.addEventListener("click", function() {
    // Save the value of the first input field in local storage
    localStorage.setItem("text-input7", input7.value);
  }); 
  save8.addEventListener("click", function() {
    // Save the value of the first input field in local storage
    localStorage.setItem("text-input8", input8.value);
  });
   save9.addEventListener("click", function() {
    // Save the value of the first input field in local storage
    localStorage.setItem("text-input9", input9.value);
  });











  // Check for saved values in local storage when the page loads
  if (localStorage.getItem("text-input1")) {
    input1.value = localStorage.getItem("text-input1");
  }
  if (localStorage.getItem("text-input2")) {
    input2.value = localStorage.getItem("text-input2");
  }
  if (localStorage.getItem("text-input3")) {
    input3.value = localStorage.getItem("text-input3");
  }
  if (localStorage.getItem("text-input4")) {
    input4.value = localStorage.getItem("text-input4");
  }
  if (localStorage.getItem("text-input5")) {
    input5.value = localStorage.getItem("text-input5");
  }
  if (localStorage.getItem("text-input6")) {
    input6.value = localStorage.getItem("text-input6");
  }
  if (localStorage.getItem("text-input7")) {
    input7.value = localStorage.getItem("text-input7");
  }
  if (localStorage.getItem("text-input8")) {
    input8.value = localStorage.getItem("text-input8");
  }
  if (localStorage.getItem("text-input9")) {
    input9.value = localStorage.getItem("text-input9");
  }
  // Display saved values when page is loaded
  savedValues.innerHTML = 
  `<p>Input 1: ${localStorage.getItem("text-input1")}</p>
  <p>Input 2: ${localStorage.getItem("text-input2")}</p>
  <p>Input 3: ${localStorage.getItem("text-input3")}</p>
  <p>Input 4: ${localStorage.getItem("text-input4")}</p>
  <p>Input 5: ${localStorage.getItem("text-input5")}</p>
  <p>Input 6: ${localStorage.getItem("text-input6")}</p>
  <p>Input 7: ${localStorage.getItem("text-input7")}</p>
  <p>Input 8: ${localStorage.getItem("text-input8")}</p>
  <p>Input 9: ${localStorage.getItem("text-input9")}</p>`;










// Add time blocks for business hours (9 am to 5 pm)
   // these time blocks need to be editable with text.
   // add a save even button at the end of each event.
   // Time| Event| Save.
   // the event should be saved on a local storage when the save button is clicked.
//color code events (grey = hours past, red =  set events, green = empty events )