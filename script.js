//* WATER RIPPLE ANIMATION

$(document).ready(function(){
    $("#full_view").ripples({
    resolution: 1280,
    perturbance: .01,
});
});

//* FETCHING THE API

let input = document.querySelector("form")
let button = document.querySelector("button")
button.addEventListener("click",(clickMethod)=>{
    clickMethod.preventDefault()
    let fetchingData = async()=>{
        let api_key ="0f915e409d4c46b2460618456b362281"
        let place = document.querySelector("#location").value
        let apiData = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api_key}`)
        let finalApiData = await apiData.json()
        console.log(finalApiData);
        let temperatureValue = document.querySelector("#temperature_value")
        let humidityValue = document.querySelector("#humidity_value")
        let windspeedValue = document.querySelector("#windspeed_value")
        let weatherconditionValue = document.querySelector("#weathercondition_value")
        let sunriseValue = document.querySelector("#sunrise_value") 
        let sunsetValue = document.querySelector("#sunset_value")
        let visibilityValue = document.querySelector("#visibility_value")

        //* FINAL DETAILS

        let finalTemperature = Math.round(finalApiData.main.temp-273)
        let finalHumidity = (finalApiData.main.humidity)
        let finalWindspeed =Math.round(finalApiData.wind.speed*1.609344)
        let finalWeatherCondition =( finalApiData.weather[0].main).toLowerCase()
        let finalSunrise = (finalApiData.sys.sunrise)
        let finalSunset = (finalApiData.sys.sunset)
        let finalVisibility = (finalApiData.visibility/1000)

//! BACKGROUND IMAGE CHANGE ACCORDING TO WEATHER

        let background_image = document.querySelector('#full_view')
        console.log(background_image)
        console.log(finalWeatherCondition)
switch(finalWeatherCondition){
    case "clear":
        background_image.style.backgroundImage="url(/Assets/Images/clear.png)"
        break;
}

//* FETCHING SUNRISE VALUE AS 12 HOURS TIME FORMAT

        function convertSunriseTo12Hour(sunriseTimestamp) {

            //* Create a Date object from the timestamp

            const sunriseDate = new Date(sunriseTimestamp * 1000);
          
            //* Options for formatting the time in 12-hour format with AM/PM

            const options = { hour: 'numeric', minute: 'numeric', hour12: true };
          
            //* Format the date object according to the options

            const formattedSunrise = sunriseDate.toLocaleTimeString('en-US', options);
          return formattedSunrise;
          }
          
          //* Example usage:

          const sunriseTimestamp = finalSunrise;
          const formattedSunriseTime = convertSunriseTo12Hour(sunriseTimestamp);
          
//* FETCHING SUNSET VALUE AS 12 HOURS TIME FORMAT

function convertSunsetTo12Hour(sunsetTimestamp) {

    //* Create a Date object from the timestamp

    const sunsetDate = new Date(sunsetTimestamp * 1000);
  
    //* Options for formatting the time in 12-hour format with AM/PM

    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  
    //* Format the date object according to the options

    const formattedSunset = sunsetDate.toLocaleTimeString('en-US', options);
  return formattedSunset;
  }
  
   //* Example usage

  const sunsetTimestamp = finalSunset; 
  const formattedSunsetTime = convertSunsetTo12Hour(sunsetTimestamp);

       //* ADDING THE VALUES TO THE HTML FILE 

        temperatureValue.innerHTML = `${finalTemperature} °C`
        humidityValue.innerHTML = `${finalHumidity} %`
        windspeedValue.innerHTML = `${finalWindspeed} km/h`
       weatherconditionValue.innerHTML = `${finalWeatherCondition}`
       sunriseValue.innerHTML = `${formattedSunriseTime}`
       sunsetValue.innerHTML = `${formattedSunsetTime}`
       visibilityValue.innerHTML = `${finalVisibility} km`
    }
    fetchingData()
})
let api_key ="0f915e409d4c46b2460618456b362281"
let locations = ["Abu Dhabi","Washington D.C.","Beijing","New Delhi","Kolkata","Bhubaneswar"]
locations.map((place)=>{
    let fetchData = async()=>{
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api_key}`)
        let finalData = await data.json()
        console.log(finalData)
    }
    fetchData()
})


//!----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//* FOR ABU DHABI TEMPERATURE

let fetch_abu_dhabi_temperature = async () => {
    let abu_dhabi_temperature = document.querySelector(".abu_dhabi_temperature");
    console.log(abu_dhabi_temperature)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Abu Dhabi&appid=${api_key}`)
    let finalData = await data.json()
    let temperature_of_abu_dhabi = Math.round(finalData.main.temp-273)
    abu_dhabi_temperature.innerHTML=`${temperature_of_abu_dhabi} °C`
}
fetch_abu_dhabi_temperature()
    
//* FOR ABU DHABI HUMIDITY

let fetch_abu_dhabi_humidity = async () => {
    let abu_dhabi_humidity = document.querySelector(".abu_dhabi_humidity");
    console.log(abu_dhabi_humidity)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Abu Dhabi&appid=${api_key}`)
    let finalData = await data.json()
    let humidity_of_abu_dhabi = (finalData.main.humidity)
    abu_dhabi_humidity.innerHTML=`${humidity_of_abu_dhabi} %`
}
fetch_abu_dhabi_humidity()

//!* FOR ABU DHABI WIND SPEED

let fetch_abu_dhabi_wind_speed = async () => {
    let abu_dhabi_wind_speed = document.querySelector(".abu_dhabi_wind_speed");
    console.log(abu_dhabi_wind_speed)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Abu Dhabi&appid=${api_key}`)
    let finalData = await data.json()
    let wind_speed_of_abu_dhabi = Math.round(finalData.wind.speed*1.609344)
    abu_dhabi_wind_speed.innerHTML=`${wind_speed_of_abu_dhabi} km/h`
}
fetch_abu_dhabi_wind_speed()

//* FOR ABU DHABI WEATHER CONDITION

let fetch_abu_dhabi_weather_condition = async () => {
    let abu_dhabi_weather_condition = document.querySelector(".abu_dhabi_weather_condition");
    console.log(abu_dhabi_weather_condition)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Abu Dhabi&appid=${api_key}`)
    let finalData = await data.json()
    let weather_condition_of_abu_dhabi =finalData.weather[0].main
    abu_dhabi_weather_condition.innerHTML=`${weather_condition_of_abu_dhabi}`
}
fetch_abu_dhabi_weather_condition()

//* FOR ABU DHABI VISIBILITY

let fetch_abu_dhabi_visibility = async () => {
    let abu_dhabi_visibility = document.querySelector(".abu_dhabi_visibility");
    console.log(abu_dhabi_visibility)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Abu Dhabi&appid=${api_key}`)
    let finalData = await data.json()
    let visibility_of_abu_dhabi = (finalData.visibility/1000)
    abu_dhabi_visibility.innerHTML=`${visibility_of_abu_dhabi} km`
}
fetch_abu_dhabi_visibility()


//!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------!//


//* FOR WASHINGTON D.C. TEMPERATURE

let fetch_washington_temperature = async () => {
    let washington_temperature = document.querySelector(".washington_temperature");
    console.log(washington_temperature)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Washington D.C.&appid=${api_key}`)
    let finalData = await data.json()
    let temperature_of_washington = Math.round(finalData.main.temp-273)
    washington_temperature.innerHTML=`${temperature_of_washington} °C`
}
fetch_washington_temperature()

//* FOR WASHINGTON D.C. HUMIDITY

let fetch_washington_humidity = async () => {
    let washington_humidity = document.querySelector(".washington_humidity");
    console.log(washington_humidity)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Washington D.C.&appid=${api_key}`)
    let finalData = await data.json()
    let humidity_of_washington = (finalData.main.humidity)
    washington_humidity.innerHTML=`${humidity_of_washington} %`
}
fetch_washington_humidity()

//* FOR WASHINGTON D.C. WIND SPEED

let fetch_washington_wind_speed = async () => {
    let washington_wind_speed = document.querySelector(".washington_wind_speed");
    console.log(washington_wind_speed)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Washington D.C.&appid=${api_key}`)
    let finalData = await data.json()
    let wind_speed_of_washington = Math.round(finalData.wind.speed*1.609344)
    washington_wind_speed.innerHTML=`${wind_speed_of_washington} km/h`
}
fetch_washington_wind_speed()

//* FOR WASHINGTON D.C. WEATHER CONDITION

let fetch_washington_weather_condition = async () => {
    let washington_weather_condition = document.querySelector(".washington_weather_condition");
    console.log(washington_weather_condition)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Washington D.C.&appid=${api_key}`)
    let finalData = await data.json()
    let weather_condition_of_washington =finalData.weather[0].main
    washington_weather_condition.innerHTML=`${weather_condition_of_washington}`
}
fetch_washington_weather_condition()

//* FOR WASHINGTON D.C. VISIBILITY

let fetch_washington_visibility = async () => {
    let washington_visibility = document.querySelector(".washington_visibility");
    console.log(washington_visibility)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Washington D.C.&appid=${api_key}`)
    let finalData = await data.json()
    let visibility_of_washington = (finalData.visibility/1000)
    washington_visibility.innerHTML=`${visibility_of_washington} km`
}
fetch_washington_visibility()


//!------------------------------------------------------------------------------------------------------------------------------------------------------------------!//



//* FOR  BEIJING TEMPERATURE

let fetch_beijing_temperature = async () => {
    let beijing_temperature = document.querySelector(".beijing_temperature");
    console.log(beijing_temperature)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=${api_key}`)
    let finalData = await data.json()
    let temperature_of_beijing = Math.round(finalData.main.temp-273)
    beijing_temperature.innerHTML=`${temperature_of_beijing} °C`
}
fetch_beijing_temperature()

//* FOR BEIJING HUMIDITY

let fetch_beijing_humidity = async () => {
    let beijing_humidity = document.querySelector(".beijing_humidity");
    console.log(beijing_humidity)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=${api_key}`)
    let finalData = await data.json()
    let humidity_of_beijing = (finalData.main.humidity)
    beijing_humidity.innerHTML=`${humidity_of_beijing} %`
}
fetch_beijing_humidity()

//* FOR BEIJING WIND SPEED

let fetch_beijing_wind_speed = async () => {
    let beijing_wind_speed = document.querySelector(".beijing_wind_speed");
    console.log(beijing_wind_speed)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=${api_key}`)
    let finalData = await data.json()
    let wind_speed_of_beijing = Math.round(finalData.wind.speed*1.609344)
    beijing_wind_speed.innerHTML=`${wind_speed_of_beijing} km/h`
}
fetch_beijing_wind_speed()

//* FOR BEIJING WEATHER CONDITION

let fetch_beijing_weather_condition = async () => {
    let beijing_weather_condition = document.querySelector(".beijing_weather_condition");
    console.log(beijing_weather_condition)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=${api_key}`)
    let finalData = await data.json()
    let weather_condition_of_beijing =finalData.weather[0].main
    beijing_weather_condition.innerHTML=`${weather_condition_of_beijing}`
}
fetch_beijing_weather_condition()

//* FOR BEIJING VISIBILITY

let fetch_beijing_visibility = async () => {
    let beijing_visibility = document.querySelector(".beijing_visibility");
    console.log(beijing_visibility)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=${api_key}`)
    let finalData = await data.json()
    let visibility_of_beijing = (finalData.visibility/1000)
    beijing_visibility.innerHTML=`${visibility_of_beijing} km`
}
fetch_beijing_visibility()


//!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------!//


//* FOR  NEW DELHI TEMPERATURE

let fetch_new_delhi_temperature = async () => {
    let new_delhi_temperature = document.querySelector(".new_delhi_temperature");
    console.log(new_delhi_temperature)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=New Delhi&appid=${api_key}`)
    let finalData = await data.json()
    let temperature_of_new_delhi = Math.round(finalData.main.temp-273)
    new_delhi_temperature.innerHTML=`${temperature_of_new_delhi} °C`
}
fetch_new_delhi_temperature()

//* FOR NEW DELHI HUMIDITY

let fetch_new_delhi_humidity = async () => {
    let new_delhi_humidity = document.querySelector(".new_delhi_humidity");
    console.log(new_delhi_humidity)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=New Delhi&appid=${api_key}`)
    let finalData = await data.json()
    let humidity_of_new_delhi = (finalData.main.humidity)
    new_delhi_humidity.innerHTML=`${humidity_of_new_delhi} %`
}
fetch_new_delhi_humidity()

//* FOR NEW DELHI WIND SPEED

let fetch_new_delhi_wind_speed = async () => {
    let new_delhi_wind_speed = document.querySelector(".new_delhi_wind_speed");
    console.log(new_delhi_wind_speed)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=New Delhi&appid=${api_key}`)
    let finalData = await data.json()
    let wind_speed_of_new_delhi = Math.round(finalData.wind.speed*1.609344)
    new_delhi_wind_speed.innerHTML=`${wind_speed_of_new_delhi} km/h`
}
fetch_new_delhi_wind_speed()

//* FOR NEW DELHI WEATHER CONDITION

let fetch_new_delhi_weather_condition = async () => {
    let new_delhi_weather_condition = document.querySelector(".new_delhi_weather_condition");
    console.log(new_delhi_weather_condition)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=New Delhi&appid=${api_key}`)
    let finalData = await data.json()
    let weather_condition_of_new_delhi =finalData.weather[0].main
    new_delhi_weather_condition.innerHTML=`${weather_condition_of_new_delhi}`
}
fetch_new_delhi_weather_condition()

//* FOR NEW DELHI VISIBILITY

let fetch_new_delhi_visibility = async () => {
    let new_delhi_visibility = document.querySelector(".new_delhi_visibility");
    console.log(new_delhi_visibility)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=New Delhi&appid=${api_key}`)
    let finalData = await data.json()
    let visibility_of_new_delhi = (finalData.visibility/1000)
    new_delhi_visibility.innerHTML=`${visibility_of_new_delhi} km`
}
fetch_new_delhi_visibility()


//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------!//


//* FOR  KOLKATA TEMPERATURE

let fetch_kolkata_temperature = async () => {
    let kolkata_temperature = document.querySelector(".kolkata_temperature");
    console.log(kolkata_temperature)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${api_key}`)
    let finalData = await data.json()
    let temperature_of_kolkata = Math.round(finalData.main.temp-273)
    kolkata_temperature.innerHTML=`${temperature_of_kolkata} °C`
}
fetch_kolkata_temperature()

//* FOR KOLKATA HUMIDITY

let fetch_kolkata_humidity = async () => {
    let kolkata_humidity = document.querySelector(".kolkata_humidity");
    console.log(kolkata_humidity)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${api_key}`)
    let finalData = await data.json()
    let humidity_of_kolkata = (finalData.main.humidity)
    kolkata_humidity.innerHTML=`${humidity_of_kolkata} %`
}
fetch_kolkata_humidity()

//* FOR KOLKATA WIND SPEED

let fetch_kolkata_wind_speed = async () => {
    let kolkata_wind_speed = document.querySelector(".kolkata_wind_speed");
    console.log(kolkata_wind_speed)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${api_key}`)
    let finalData = await data.json()
    let wind_speed_of_kolkata = Math.round(finalData.wind.speed*1.609344)
    kolkata_wind_speed.innerHTML=`${wind_speed_of_kolkata} km/h`
}
fetch_kolkata_wind_speed()

//* FOR KOLKATA WEATHER CONDITION

let fetch_kolkata_weather_condition = async () => {
    let kolkata_weather_condition = document.querySelector(".kolkata_weather_condition");
    console.log(kolkata_weather_condition)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${api_key}`)
    let finalData = await data.json()
    let weather_condition_of_kolkata =finalData.weather[0].main
    kolkata_weather_condition.innerHTML=`${weather_condition_of_kolkata}`
}
fetch_kolkata_weather_condition()

//* FOR KOLKATA VISIBILITY

let fetch_kolkata_visibility = async () => {
    let kolkata_visibility = document.querySelector(".kolkata_visibility");
    console.log(kolkata_visibility)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${api_key}`)
    let finalData = await data.json()
    let visibility_of_kolkata = (finalData.visibility/1000)
    kolkata_visibility.innerHTML=`${visibility_of_kolkata} km`
}
fetch_kolkata_visibility()


//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------!//


//* FOR  BHUBANESWAR TEMPERATURE

let fetch_bhubaneswar_temperature = async () => {
    let bhubaneswar_temperature = document.querySelector(".bhubaneswar_temperature");
    console.log(bhubaneswar_temperature)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bhubaneswar&appid=${api_key}`)
    let finalData = await data.json()
    let temperature_of_bhubaneswar = Math.round(finalData.main.temp-273)
    bhubaneswar_temperature.innerHTML=`${temperature_of_bhubaneswar} °C`
}
fetch_bhubaneswar_temperature()

//* FOR BHUBANESWAR HUMIDITY

let fetch_bhubaneswar_humidity = async () => {
    let bhubaneswar_humidity = document.querySelector(".bhubaneswar_humidity");
    console.log(bhubaneswar_humidity)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bhubaneswar&appid=${api_key}`)
    let finalData = await data.json()
    let humidity_of_bhubaneswar = (finalData.main.humidity)
    bhubaneswar_humidity.innerHTML=`${humidity_of_bhubaneswar} %`
}
fetch_bhubaneswar_humidity()

//* FOR BHUBANESWAR WIND SPEED

let fetch_bhubaneswar_wind_speed = async () => {
    let bhubaneswar_wind_speed = document.querySelector(".bhubaneswar_wind_speed");
    console.log(bhubaneswar_wind_speed)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bhubaneswar&appid=${api_key}`)
    let finalData = await data.json()
    let wind_speed_of_bhubaneswar = Math.round(finalData.wind.speed*1.609344)
    bhubaneswar_wind_speed.innerHTML=`${wind_speed_of_bhubaneswar} km/h`
}
fetch_bhubaneswar_wind_speed()

//* FOR BHUBANESWAR WEATHER CONDITION

let fetch_bhubaneswar_weather_condition = async () => {
    let bhubaneswar_weather_condition = document.querySelector(".bhubaneswar_weather_condition");
    console.log(bhubaneswar_weather_condition)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bhubaneswar&appid=${api_key}`)
    let finalData = await data.json()
    let weather_condition_of_bhubaneswar =finalData.weather[0].main
    bhubaneswar_weather_condition.innerHTML=`${weather_condition_of_bhubaneswar}`
}
fetch_bhubaneswar_weather_condition()

//* FOR BHUBANESWAR VISIBILITY

let fetch_bhubaneswar_visibility = async () => {
    let bhubaneswar_visibility = document.querySelector(".bhubaneswar_visibility");
    console.log(bhubaneswar_visibility)
    let api_key = "0f915e409d4c46b2460618456b362281"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bhubaneswar&appid=${api_key}`)
    let finalData = await data.json()
    let visibility_of_bhubaneswar = (finalData.visibility/1000)
    bhubaneswar_visibility.innerHTML=`${visibility_of_bhubaneswar} km`
}
fetch_bhubaneswar_visibility()


//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------!//


