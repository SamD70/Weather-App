/* window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
        })
    }
}) */

var submit = document.querySelector('.submit');
var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.city');
var desc = document.querySelector('.description');
var temp = document.querySelector('.temperature-degree');
var icon = document.querySelector('#wicon');

console.log(icon);

submit.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+
    '&APPID=9bd4419f47c81f0ec93b4f84d8d3ce88')
    .then(response => response.json())
    .then(data => {
        var cityValue = data['name'];
        var descValue = data['weather'][0]['description'];
        var tempValue = Math.floor((data['main']['temp'])-273);
        var iconValue = data['weather'][0]['icon'];

        var iconurl = "http://openweathermap.org/img/w/" + iconValue + ".png";

        console.log(data);

        city.innerHTML = cityValue;
        desc.innerHTML = descValue;
        temp.innerHTML = tempValue;
        icon.setAttribute("src", iconurl);
    })
.catch(err => alert("Wrong City Name"))
})

function setIcons(icon, iconID){
    var skycons = new skycons({color: "white"})
}