import { AlertTriangle } from 'lucide-react'

const alerts = [
  {
    message: "Feedback rate dropped by 10% at Location A",
    severity: "high",
  },
  {
    message: "Average rating at Location B decreased by 0.5 stars",
    severity: "medium",
  },
  {
    message: "3 unresolved issues older than 48 hours",
    severity: "high",
  },
  {
    message: "Positive sentiment about cleanliness decreased by 5%",
    severity: "low",
  },
]

export function TopAlerts() {
  return (
    <div className="space-y-4">
      {alerts.map((alert, index) => (
        <div key={index} className={`flex items-center p-4 rounded-lg ${
          alert.severity === 'high' ? 'bg-red-100 text-red-800' :
          alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          <AlertTriangle className="h-5 w-5 mr-2" />
          <span className="text-sm">{alert.message}</span>
        </div>
      ))}
    </div>
  )
}

