// Write your code here

import './index.css'

const DetailsComponent  = (props)=> {
    return (
      <div>
      <h1>Location : {props.weatherData && props.weatherData?.location}</h1>
      <h1>Temparature : {props.weatherData && props.weatherData?.temperature}</h1>
      <h1>Date and Time : {props.weatherData && props.weatherData?.dateAndTime}</h1>
      <h1>Humidity : {props.weatherData && props.weatherData?.humidity}</h1>
    </div>
    )
  
}
export default DetailsComponent