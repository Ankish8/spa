import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ActionButton } from '@/components/action-button'

const insights = [
  {
    title: "Improve Wait Times",
    description: "Long wait times are affecting customer satisfaction. Consider optimizing scheduling and staff allocation.",
    action: "Review Scheduling",
  },
  {
    title: "Enhance Cleanliness",
    description: "Recent feedback indicates a drop in cleanliness ratings. Implement stricter cleaning protocols.",
    action: "Update Cleaning Procedures",
  },
  {
    title: "Staff Training",
    description: "Some guests reported rude staff interactions. Conduct a customer service training session.",
    action: "Schedule Training",
  },
  {
    title: "Booking System Upgrade",
    description: "Multiple issues reported with the current booking system. Consider upgrading or replacing the system.",
    action: "Evaluate Booking Systems",
  },
]

export function ActionableInsights() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {insights.map((insight, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{insight.title}</CardTitle>
            <CardDescription>{insight.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ActionButton>{insight.action}</ActionButton>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
