var timeStamp;
var myDate;

/*
function CreateUnixTime()
{
  // Get values of the date
  var day = document.getElementById('day');
  var month = document.getElementById('month');
  var year = document.getElementById('year');
  var hour = document.getElementById('hour');
  var minute = document.getElementById('minute');
  var second = document.getElementById('second');

  var daytext = day.options[day.selectedIndex].text;
  var monthtext = month.options[month.selectedIndex].text;
  var yeartext = year.options[year.selectedIndex].text;
  var hourtext = hour.options[hour.selectedIndex].text;
  var minutetext = minute.options[minute.selectedIndex].text;
  var secondtext = second.options[second.selectedIndex].text;

  var myDate = new Date(""+ monthtext + " " + daytext + " " + yeartext + " " + hourtext + ":" + minutetext + ":" + secondtext + ""); // Your timezone!
  // var myDate = new Date("July 1, 1978 02:30:00"); // Your timezone!
  var myEpoch = myDate.getTime()/1000.0;
  document.getElementById("UnixTimeTextArea").innerHTML = myEpoch;
}
*/

/*
    function CreateDate(timeStamp)
    {
      myDate = new Date( timeStamp *1000);
      myDate = myDate.toGMtimeStamptring()+"<br>"+myDate.toLocaleString();
      document.getElementById("CreateDateTextArea").innerHTML = myDate;
      document.getElementById("CreateDateTextArea").select();
    }
*/

function getUnixTime() {
  timeStamp = Math.round(new Date().getTime() / 1000);
  return timeStamp;
}
/*
function copyToClipboard()
{
  document.getElementById("CopyField").innerHTML = timeStamp;
  document.getElementById("CopyField").select();
}
*/

function datepickerOnClick() {
  $('#sandbox-container').datepicker({
  });
}


$(document).ready(function() {

  window.setInterval(function() {
    getUnixTime();
    $('#unixTimeStamp').text(timeStamp);
  }, 1000);
});
