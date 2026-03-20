const wheaterUrl ="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m"
const cityCode="https://geocoding-api.open-meteo.com/v1/search?name=mankera"
async function wheather(params) {
    let weather_data=await fetch(wheaterUrl)
    let city_code=await fetch(cityCode)
    let weather= await weather_data.json()
    let city= await city_code.json()
}