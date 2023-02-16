// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Variables for establishing dayjs and the current date.
let currentTime = dayjs().hour();
let currentDay = document.querySelector('#currentDay');

// Dynamically isplays the current date in the currentDay id
$("#currentDay").text(dayjs());
console.log(currentDay)

// The function compares the current time with the hour of each div and updates styles appropriately
$('.time-block').each(function() {
  let currentHour = parseInt(this.id.split("-")[1]);
  console.log(currentHour)

  if(currentTime > currentHour) {
    $(this).addClass("past");
    $(this).removeClass("future present");
} else if (currentTime === currentHour) {
    $(this).addClass("present");
    $(this).removeClass("past future");
} else {
    $(this).addClass("future");
    $(this).removeClass("past present");
  }
});

// The function saves input for each div into local storage so that it reloads on the page when the page loads. 
// I'd like to come back and do this in a loop next next. 
$('.saveBtn').on("click", function() {
  let notes = $(this).siblings(".description").val();
  let hourNote = $(this).parent().attr("id");
  localStorage.setItem(hourNote, notes);
})

$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hou-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));


