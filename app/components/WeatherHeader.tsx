import { Search, Settings, User } from "lucide-react"

interface WeatherHeaderProps {
  location: string
  lastUpdated: Date
}

export default function WeatherHeader({ location, lastUpdated }: WeatherHeaderProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
      {/* Left side - Location and Date */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-lg font-medium">{location}</span>
        </div>
        <div className="text-gray-400 text-sm sm:text-base">{formatDate(lastUpdated)}</div>
      </div>

      {/* Center - Search (Hidden on mobile, shown on tablet+) */}
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search city..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Right side - Controls and User */}
      <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-4">
        <div className="text-xs sm:text-sm text-gray-400">Last updated: {formatTime(lastUpdated)}</div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600">
            <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600">
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden w-full">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search city..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
      </div>
    </header>
  )
}
