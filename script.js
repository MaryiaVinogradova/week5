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

    //clear btn set up
      var clear7 = $("#clear7");
      var clear8 = $("#clear8");
      var clear9 = $("#clear9");
      var clear10 = $("#clear10");
      var clear11 = $("#clear11");
      var clear12 = $("#clear12");
      var clear13 = $("#clear13");
      var clear14 = $("#clear14");
      var clear15 = $("#clear15");
      var clear16 = $("#clear16");
      var clear17 = $("#clear17");
      var clear18 = $("#clear18");

      clear7.on("click",function(){
        localStorage.removeItem("hr7");
        location.reload();
      });
      clear8.on("click",function(){
        localStorage.removeItem("hr8");
        location.reload();
      });
      clear9.on("click",function(){
        localStorage.removeItem("hr9");
        location.reload();
      });
      clear10.on("click",function(){
        localStorage.removeItem("hr10");
        location.reload();
      });
      clear11.on("click",function(){
        localStorage.removeItem("hr11");
        location.reload();
      });
      clear12.on("click",function(){
        localStorage.removeItem("hr12");
        location.reload();
      });
      clear13.on("click",function(){
        localStorage.removeItem("hr13");
        location.reload();
      });
      clear14.on("click",function(){
        localStorage.removeItem("hr14");
        location.reload();
      });
      clear15.on("click",function(){
        localStorage.removeItem("hr15");
        location.reload();
      });
      clear16.on("click",function(){
        localStorage.removeItem("hr16");
        location.reload();
      });
      clear17.on("click",function(){
        localStorage.removeItem("hr17");
        location.reload();
      });
      clear18.on("click",function(){
        localStorage.removeItem("hr18");
        location.reload();
      });
    

    // setting hour colors
    var dayTime = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
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
    