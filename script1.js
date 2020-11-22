$(document).ready(()=>{
    var typed = new Typed('.hhh', {
        strings: ['Hi guys,', 'We can find weather using latitude and longitude...!'],
        smartBackspace: true,
        typeSpeed:80
      });
    var a;
    $("#i1").on('keyup',function(e){
        a = e.target.value;
        console.log(a);

    });
    $("#i2").on('keyup',(e)=>{
        var b = e.target.value;
        
         $.ajax({


             url:`http://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=7a68dd89fbc93656093f7dd618da8490&units=metric`,
            fail:()=>{
                confirm("enter valid data to proceed");
                return true;
            }

         }).done(function(weatherdata){
            $('.viewer1').css({
            
                "margin-top": "50px",
                "border-radius": "8px",
                "border-style": "solid",
                "border-color": "#7da6e8",
                "width": "325px",
                "height": "381px;",
                "background-image": "url(img2.jpg)",
        })

            $(".viewer1").html(
                `<div class="card2" style="width: 20rem;">
                     <img src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" class="card-img1">
                    <div class="card1">  
    <pre class="card-text1"> Weather<b>:${weatherdata.weather[0].description}</b>
 Temperature is about at <b>${weatherdata.main.temp}&#8451</b> but
 it feels like <b>${weatherdata.main.feels_like}&#8451<b>.
 place name in that location=${weatherdata.name}
                </p>
                   </div>
                     <a href="https://www.google.com/search?q=${weatherdata.name}" class="btn btn-primary" id="bb">click to know about ${weatherdata.name}</a>    
                     
                </div>`
            )
         });
        });
});
