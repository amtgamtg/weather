$(document).ready(function(){
  var typed = new Typed('.typed', {
    strings: ['Hello,', 'You can find weather of your city...!'],
    smartBackspace: false,
    typeSpeed:110
  });
   $("#input1").on("keyup",function(event){
     var cityname = event.target.value;
     const Api="7a68dd89fbc93656093f7dd618da8490";
     $.ajax(
       {
         url:`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${Api}&units=metric`
       }
     ).done((dataval)=>{
      $(".viewer").html(

       `<div class="card1" style="width: 20rem;">
            <img src="http://openweathermap.org/img/wn/${dataval.weather[0].icon}@2x.png" class="card-img-top">
           <div class="car"> 
    <pre class="card-text">
     Weather<b>:${dataval.weather[0].description}</b>
    Temperature is about at <b>${dataval.main.temp}&#8451</b> but
     it feels like <b>${dataval.main.feels_like}&#8451<b>.
       </p>
          </div>

            <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary" id="bb">click to know about ${cityname}</a> 
           
       </div>`
      );
     });
   });



 });