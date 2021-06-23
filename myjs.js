var count = new Date("jun 1, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var d = count - now;

    var days = Math.floor(d/(1000*3600*24));
    var Hours = Math.floor((d%(1000*3600*24))/(1000*3600));
    var minutes = Math.floor((d%(1000*3600))/(1000*60));
    var seconds = Math.floor((d%(1000*60))/1000);

    
    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = Hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;
})
