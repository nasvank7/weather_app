"use client"

import { useState, useEffect } from "react"
import WeatherHeader from "./components/WeatherHeader"
import CurrentWeather from "./components/CurrentWeather"
import WeatherCharts from "./components/WeatherChart"
import { type WeatherData, generateMockWeatherData } from "./lib/weatherData"

export default function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  // Function to fetch/generate weather data
  const updateWeatherData = () => {
    const newData = generateMockWeatherData()
    setWeatherData(newData)
    setLastUpdated(new Date())
  }

  // Initial data load
  useEffect(() => {
    updateWeatherData()
  }, [])

  // Auto-refresh every hour (1 hr)
  useEffect(() => {
    const interval = setInterval(() => {
      updateWeatherData()
    }, 3600000) // 1 hour

    return () => clearInterval(interval)
  }, [])

  if (!weatherData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading weather data...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="lg:h-screen lg:overflow-hidden flex flex-col p-3 sm:p-4 lg:p-6">
        {/* Header */}
        <WeatherHeader location={weatherData.location} lastUpdated={lastUpdated} />

        {/* Main Content - Allow scrolling on mobile/tablet, fixed height on desktop */}
        <div className="flex-1 mt-4 sm:mt-6 lg:h-full lg:overflow-hidden">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="space-y-4">
              {/* Current Weather*/}
              <CurrentWeather
                temperature={weatherData.current.temperature}
                rainfall={weatherData.current.rainfall}
                condition={weatherData.current.condition}
                details={weatherData.current.details}
              />

              {/* Charts */}
              <WeatherCharts
                temperatureData={weatherData.charts.temperature}
                rainfallData={weatherData.charts.rainfall}
                soilTemperatureData={weatherData.charts.soilTemperature}
                soilMoistureData={weatherData.charts.soilMoisture}
                isMobile={true}
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 h-full">
            {/* Current Weather*/}
            <div className="col-span-4">
              <CurrentWeather
                temperature={weatherData.current.temperature}
                rainfall={weatherData.current.rainfall}
                condition={weatherData.current.condition}
                details={weatherData.current.details}
              />
            </div>

            {/* Charts */}
            <div className="col-span-8">
              <WeatherCharts
                temperatureData={weatherData.charts.temperature}
                rainfallData={weatherData.charts.rainfall}
                soilTemperatureData={weatherData.charts.soilTemperature}
                soilMoistureData={weatherData.charts.soilMoisture}
                isMobile={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
