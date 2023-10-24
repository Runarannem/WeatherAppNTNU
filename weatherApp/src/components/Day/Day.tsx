import getWeatherIcon from '../../utils/getWeatherIcon'
import weatherHook from '../../utils/api_hooks/weatherHook'
import cityCoordinates from '../../utils/coordinates/cityCoordinates'
import './Day.css'

interface DayProps {
  cityName: string
  day: number // 1-6 days in the future
}

function Day({ cityName, day }: DayProps) {
  const cityWeatherData = weatherHook(cityCoordinates[cityName])

  // Find the lowest and highest temperature for the specified day
  let maxTemp = cityWeatherData?.hourly?.temperature_2m[0]
  let minTemp = cityWeatherData?.hourly?.temperature_2m[0]

  const hourIndex = day * 24

  // Get the date string from the weather data
  const dateString = cityWeatherData?.hourly?.time[hourIndex]
  const date = new Date(dateString)

  // Get the day of the week for the specified day
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayIndex = date.getDay()
  const dayOfWeek = daysOfWeek[dayIndex]

  // Calculate the maximum and minimum temperatures for the day
  for (let i = hourIndex; i < hourIndex + 24; i++) {
    if (cityWeatherData?.hourly?.temperature_2m[i] < minTemp) {
      minTemp = cityWeatherData?.hourly?.temperature_2m[i]
    }
    if (cityWeatherData?.hourly?.temperature_2m[i] > maxTemp) {
      maxTemp = cityWeatherData?.hourly?.temperature_2m[i]
    }
  }

  const cityTempMax = maxTemp
  const cityTempMin = minTemp

  // Calculate the average precipitation and cloud coverage for the day
  let sumOfRain = 0
  let sumOfClouds = 0

  for (let i = hourIndex; i < hourIndex + 24; i++) {
    sumOfRain += cityWeatherData?.hourly?.rain[i]
    sumOfClouds += cityWeatherData?.hourly?.cloudcover[i]
  }

  const cityPersipitation = parseFloat((sumOfRain / 24).toFixed(2))
  const cloudCoverage = parseFloat((sumOfClouds / 24).toFixed(2))

  return (
    <>
      <div className="day">
        <p>{dayOfWeek}</p>
        <img src={getWeatherIcon(cityPersipitation, cloudCoverage)} width={40} height={40} alt="weather icon" />
        <p>{cityPersipitation} mm</p>
        <p>
          {cityTempMax} / {cityTempMin}℃
        </p>
      </div>
      <span className="line"></span>
    </>
  )
}

export default Day
