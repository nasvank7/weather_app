"use client"

import { Line, Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

interface ChartData {
  labels: string[]
  values: number[]
}

interface WeatherChartsProps {
  temperatureData: ChartData
  rainfallData: ChartData
  soilTemperatureData: ChartData
  soilMoistureData: ChartData
  isMobile?: boolean
}

export default function WeatherCharts({
  temperatureData,
  rainfallData,
  soilTemperatureData,
  soilMoistureData,
  isMobile = false,
}: WeatherChartsProps) {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
          font: {
            size: isMobile ? 9 : 11,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
          font: {
            size: isMobile ? 9 : 11,
          },
        },
      },
    },
  }

  const temperatureChartData = {
    labels: temperatureData.labels,
    datasets: [
      {
        data: temperatureData.values,
        borderColor: "rgb(249, 115, 22)",
        backgroundColor: "rgba(249, 115, 22, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "rgb(249, 115, 22)",
        pointBorderColor: "white",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const rainfallChartData = {
    labels: rainfallData.labels,
    datasets: [
      {
        data: rainfallData.values,
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  }

  const soilTemperatureChartData = {
    labels: soilTemperatureData.labels,
    datasets: [
      {
        data: soilTemperatureData.values,
        borderColor: "rgb(168, 85, 247)",
        backgroundColor: "rgba(168, 85, 247, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "rgb(168, 85, 247)",
        pointBorderColor: "white",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const soilMoistureChartData = {
    labels: soilMoistureData.labels,
    datasets: [
      {
        data: soilMoistureData.values,
        backgroundColor: "rgba(34, 197, 94, 0.8)",
        borderColor: "rgb(34, 197, 94)",
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  }

  return (
    <div className={`grid gap-3 sm:gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 h-full"}`}>
      {/* Temperature Chart */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
        <h3 className={`font-semibold mb-2 sm:mb-3 flex items-center ${isMobile ? "text-sm" : "text-base sm:text-lg"}`}>
          🌡️ Temperature (Last 7 Days)
        </h3>
        <div className={isMobile ? "h-48 sm:h-56" : "h-32 sm:h-40"}>
          <Line data={temperatureChartData} options={chartOptions} />
        </div>
      </div>

      {/* Rainfall Chart */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
        <h3 className={`font-semibold mb-2 sm:mb-3 flex items-center ${isMobile ? "text-sm" : "text-base sm:text-lg"}`}>
          🌧️ Rainfall (Last 7 Days)
        </h3>
        <div className={isMobile ? "h-48 sm:h-56" : "h-32 sm:h-40"}>
          <Bar data={rainfallChartData} options={chartOptions} />
        </div>
      </div>

      {/* Soil Temperature Chart */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
        <h3 className={`font-semibold mb-2 sm:mb-3 flex items-center ${isMobile ? "text-sm" : "text-base sm:text-lg"}`}>
          🌱 Soil Temperature (Last 7 Days)
        </h3>
        <div className={isMobile ? "h-48 sm:h-56" : "h-32 sm:h-40"}>
          <Line data={soilTemperatureChartData} options={chartOptions} />
        </div>
      </div>

      {/* Soil Moisture Chart */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
        <h3 className={`font-semibold mb-2 sm:mb-3 flex items-center ${isMobile ? "text-sm" : "text-base sm:text-lg"}`}>
          💧 Soil Moisture (Last 7 Days)
        </h3>
        <div className={isMobile ? "h-48 sm:h-56" : "h-32 sm:h-40"}>
          <Bar data={soilMoistureChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  )
}
