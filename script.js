// var day = moment().format("MMM Do YY");
// $("#currentDay").append(day);

$(document).ready(function () {

  $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".event").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
  })
 
  function timeTracker() {
      var presentTime = moment().hour();

      var day = moment().format("MMM Do YY");
      $("#currentDay").append(day);

      $(".time-block-7") = (function () {
          var hr7 = $('#hour-7');
          var hr8 = $('#hour-8');
          var hr9 = $('#hour-9');
          var hr10 = $('#hour-10');

          var dayTime = ["7", "8", "9", "10"]

          function updateColor(){
            for(var i=0; i<dayTime.length; i++){
                if(parseInt(dayTime[i])>day){
                    $("#"+dayTime[i]).addClass("future")
                }
                else if(parseInt(dayTime[i])<day){
                    $("#"+dayTime[i].addClass("past"))
                }
                else if(parseInt(dayTime[i])==day){
                    $("#"+day[i]).addClass("present")
                }
            }
            
          }
          updateColor();
    //       var hr7 = parseInt($('.time-block-7').attr("id").split("hour")[1]);

    //       if (hr7 < presentTime) {
    //           $(this).removeClass("future");
    //           $(this).removeClass("present");
    //           $(this).addClass("past");
    //       }
    //       else if (hr7 === presentTime) {
    //           $(this).removeClass("past");
    //           $(this).removeClass("future");
    //           $(this).addClass("present");
    //       }
    //       else {
    //           $(this).removeClass("present");
    //           $(this).removeClass("past");
    //           $(this).addClass("future");

    //       }
    //   });
      
  }

  // Get item from local storage to show up your events per hour
  $("#hour-7 .event").val(localStorage.getItem("hour-7"));
  $("#hour-8 .event").val(localStorage.getItem("hour-8"));
  $("#hour-9 .event").val(localStorage.getItem("hour-9"));
  $("#hour-10 .event").val(localStorage.getItem("hour-10"));
  $("#hour-11 .event").val(localStorage.getItem("hour-11"));
  $("#hour-12 .event").val(localStorage.getItem("hour-12"));
  $("#hour-13 .event").val(localStorage.getItem("hour-13"));
  $("#hour-14 .event").val(localStorage.getItem("hour-14"));
  $("#hour-15 .event").val(localStorage.getItem("hour-15"));
  $("#hour-16 .event").val(localStorage.getItem("hour-16"));
  $("#hour-17 .event").val(localStorage.getItem("hour-17"));
  $("#hour-18 .event").val(localStorage.getItem("hour-18"));

  timeTracker();
})