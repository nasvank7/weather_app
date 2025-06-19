import { Droplets, Eye, Gauge, Thermometer, Wind } from "lucide-react"

interface CurrentWeatherProps {
  temperature: number
  rainfall: number
  condition: string
  details: {
    realFeel: number
    wind: number
    pressure: number
    humidity: number
    visibility: number
  }
}

export default function CurrentWeather({ temperature, rainfall, condition, details }: CurrentWeatherProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return "☀️"
      case "cloudy":
        return "☁️"
      case "rainy":
        return "🌧️"
      case "partly cloudy":
        return "⛅"
      default:
        return "☀️"
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:h-full border border-gray-700/50">
      <div className="flex flex-col h-full">
        {/* Current Day */}
        <div className="mb-4 sm:mb-6">
          <div className="text-sm text-gray-300 mb-1">Today</div>
          <div className="text-sm text-gray-400">
            {new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>

     
        <div className="flex items-center mb-4 sm:mb-6">
          <div className="text-4xl sm:text-6xl font-light mr-3 sm:mr-4">{temperature}°</div>
          <div className="text-2xl sm:text-4xl">{getWeatherIcon(condition)}</div>
        </div>

        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-gray-600/30">
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Current Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="flex items-center space-x-2">
              <Thermometer className="w-4 h-4 text-orange-400" />
              <span className="text-xs sm:text-sm">Temperature: {temperature}°C</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm">Rainfall: {rainfall}mm</span>
            </div>
          </div>
        </div>

        {/* Weather Details - Responsive grid */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3 flex-1">
          <div className="flex justify-between items-center py-2 px-1 rounded-lg hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-2">
              <Thermometer className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              <span className="text-xs sm:text-sm text-gray-300">Real Feel</span>
            </div>
            <span className="text-xs sm:text-sm font-medium">{details.realFeel}°</span>
          </div>

          <div className="flex justify-between items-center py-2 px-1 rounded-lg hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-2">
              <Wind className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              <span className="text-xs sm:text-sm text-gray-300">Wind</span>
            </div>
            <span className="text-xs sm:text-sm font-medium">{details.wind} km/h</span>
          </div>

          <div className="flex justify-between items-center py-2 px-1 rounded-lg hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-2">
              <Gauge className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              <span className="text-xs sm:text-sm text-gray-300">Pressure</span>
            </div>
            <span className="text-xs sm:text-sm font-medium">{details.pressure} MB</span>
          </div>

          <div className="flex justify-between items-center py-2 px-1 rounded-lg hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-2">
              <Droplets className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              <span className="text-xs sm:text-sm text-gray-300">Humidity</span>
            </div>
            <span className="text-xs sm:text-sm font-medium">{details.humidity}%</span>
          </div>

          <div className="flex justify-between items-center py-2 px-1 rounded-lg hover:bg-white/5 transition-colors lg:col-span-1 col-span-2">
            <div className="flex items-center space-x-2">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              <span className="text-xs sm:text-sm text-gray-300">Visibility</span>
            </div>
            <span className="text-xs sm:text-sm font-medium">{details.visibility} km</span>
          </div>
        </div>
      </div>
    </div>
  )
}
