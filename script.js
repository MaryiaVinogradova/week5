//start function
$(document).ready(function(){
    // setting currentDay event using moments
    var today = moment().format("dddd, MMMM Do, YYYY, h:mm a");
    $("#currentDay").append(today);
    console.log(today);
    
    var now = parseInt(moment().format("H"));
    
    // setting storage events 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".event").val();
        var time = $(this).parent().attr("id");
  
        localStorage.setItem(time, text);
    })
  
      // Get item from local storage to show up your events per hour
      $("#hr7 .event").val(localStorage.getItem("hr7"));
      $("#hr8 .event").val(localStorage.getItem("hr8"));
      $("#hr9 .event").val(localStorage.getItem("hr9"));
      $("#hr10 .event").val(localStorage.getItem("hr10"));
      $("#hr11 .event").val(localStorage.getItem("hr11"));
      $("#hr12 .event").val(localStorage.getItem("hr12"));
      $("#hr13 .event").val(localStorage.getItem("hr13"));
      $("#hr14 .event").val(localStorage.getItem("hr14"));
      $("#hr15 .event").val(localStorage.getItem("hr15"));
      $("#hr16 .event").val(localStorage.getItem("hr16"));
      $("#hr17 .event").val(localStorage.getItem("hr17"));
      $("#hr18 .event").val(localStorage.getItem("hr18"));
    

    // setting hour colors
    var dayTime = ["23", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
    updateschedule();
    
    function updateschedule() {
      var Time = moment().format('H');
      for(var i = 0; i < dayTime.length; i++) {
    
        if (parseInt(dayTime[i]) > Time) {
          $("#" + dayTime[i]).addClass("future");
    
        }
        else if (parseInt(dayTime[i]) < Time) {
          $("#" + dayTime[i]).addClass("past");
    
        }
        else if (parseInt(dayTime[i]) == Time) {
          $("#" + dayTime[i]).addClass("present");
        
        }
      }
    }
    
    });
    