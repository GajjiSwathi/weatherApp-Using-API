$(document).ready(function(){


    navigator.geolocation.getCurrentPosition(success,console.error);

    function success(postion){
       var lat = postion.coords.lat;
       var long = postion.coords.lon;
       weather(lat,long);

   }
   function error(){
       console.log('error');
   }
    

function weather(lat,lon){
   var URL='https://fcc-weather-api.glitch.me/api/current?lat=35&lon=195';
    $.getJSON(URL, function(data){
        console.log(data);
        updateDOM(data);
});
}


//weather();

function  updateDOM(data){

    var city=data.name;
    var temp=Math.round(data.main.temp);
    var desc=data.weather[0].description;
   // var icon=data.weather[0].icon;

    $('#city').html(city);
    $('#temp').html(temp);
    $('#desc').html(desc);
    //$('#icon').attr('src', icon);
}
});