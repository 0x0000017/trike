// Date Picker
var datepickerInput = document.getElementById("datepickerInput");
var calendar = document.getElementById("calendar");

// Show the calendar when the input field is clicked
datepickerInput.addEventListener("click", function () {
  calendar.style.display = "block";
});

// Hide the calendar when clicking outside the input field
document.addEventListener("click", function (event) {
  if (!datepickerInput.contains(event.target) && !calendar.contains(event.target)) {
    calendar.style.display = "none";
  }
});

// Generate the calendar
function generateCalendar() {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var monthName = months[currentMonth];
  var monthYear = monthName + " " + currentYear;

  // Set the input field value to the selected date
  
  // Generate the calendar grid
  var calendarHTML = "";
  calendarHTML += "<table>";
  calendarHTML += "<thead><tr><th colspan='7'>" + monthYear + "</th></tr></thead>";
  calendarHTML += "<tbody>";

  var startDate = new Date(currentYear, currentMonth, 1);
  var endDate = new Date(currentYear, currentMonth + 1, 0);

  var daysInMonth = endDate.getDate();
  var startDay = startDate.getDay();

  var dayCounter = 1;
  var rows = Math.ceil((daysInMonth + startDay) / 7);

  for (var i = 0; i < rows; i++) {
    calendarHTML += "<tr>";
    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < startDay) {
        calendarHTML += "<td></td>";
      } else if (dayCounter > daysInMonth) {
calendarHTML += "<td></td>";
} else {
calendarHTML +=
  "<td onclick='selectDate(" +
  dayCounter +
  ", " +
  currentMonth +
  ", " +
  currentYear +
  ")'>" +
  dayCounter +
  "</td>";
dayCounter++;
}
}
calendarHTML += "</tr>";
}

    calendarHTML += "</tbody>";
    calendarHTML += "</table>";
    calendar.innerHTML = calendarHTML;
}
function selectDate(day, month, year) {
    var selectedDate = new Date(year, month, day+1);
    var formattedDate = selectedDate.toISOString().split("T")[0];
    datepickerInput.value = formattedDate;
    calendar.style.display = "none";
  }
generateCalendar();