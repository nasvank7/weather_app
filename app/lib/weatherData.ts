export interface WeatherData {
  location: string
  current: {
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
  charts: {
    temperature: ChartData
    rainfall: ChartData
    soilTemperature: ChartData
    soilMoisture: ChartData
  }
}

export interface ChartData {
  labels: string[]
  values: number[]
}

// Generate mock weather data with random variations
export function generateMockWeatherData(): WeatherData {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  // Generate random data for charts (simulating API response)
  const generateRandomData = (baseValue: number, variance: number, count = 7) => {
    return Array.from({ length: count }, () => Math.round(baseValue + (Math.random() - 0.5) * variance * 2))
  }

  const currentTemp = Math.round(15 + Math.random() * 20) 
  const currentRainfall = Math.round(Math.random() * 10) 

  return {
    location: "New York, USA",
    current: {
      temperature: currentTemp,
      rainfall: currentRainfall,
      condition: ["Sunny", "Cloudy", "Partly Cloudy", "Rainy"][Math.floor(Math.random() * 4)],
      details: {
        realFeel: currentTemp + Math.round((Math.random() - 0.5) * 6),
        wind: Math.round(5 + Math.random() * 15),
        pressure: Math.round(1000 + Math.random() * 50), 
        humidity: Math.round(40 + Math.random() * 40), 
        visibility: Math.round(8 + Math.random() * 7), 
      },
    },
    charts: {
      temperature: {
        labels: days,
        values: generateRandomData(25, 10),
      },
      rainfall: {
        labels: days,
        values: generateRandomData(5, 8),
      },
      soilTemperature: {
        labels: days,
        values: generateRandomData(18, 6),
      },
      soilMoisture: {
        labels: days,
        values: generateRandomData(60, 20),
      },
    },
  }
}

