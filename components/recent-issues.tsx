import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IssueStatusDropdown } from './issue-status-dropdown'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb } from 'lucide-react'

const issues = [
  {
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    issue: "Long wait times for Ayurvedic massage",
    status: "In Progress",
    assignedTo: "Anjali",
    timeToResolve: "2h 30m",
  },
  {
    name: "Arjun Patel",
    email: "arjun.patel@email.com",
    issue: "Steam room temperature concerns",
    status: "Open",
    assignedTo: "Rahul",
    timeToResolve: "-",
  },
  {
    name: "Meera Kapoor",
    email: "meera.kapoor@email.com",
    issue: "Scheduling conflict with yoga session",
    status: "Resolved",
    assignedTo: "Deepika",
    timeToResolve: "1h 45m",
  },
  {
    name: "Vikram Malhotra",
    email: "vikram.malhotra@email.com",
    issue: "Online booking system not working",
    status: "Open",
    assignedTo: "Arun",
    timeToResolve: "-",
  },
]

export function RecentIssues() {
  return (
    <div className="space-y-6">
      {issues.map((issue) => (
        <div key={issue.email} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-background rounded-lg shadow-sm">
          <Avatar className="h-10 w-10">
            <AvatarImage src={`https://avatar.vercel.sh/${issue.name}.png`} alt={issue.name} />
            <AvatarFallback>{issue.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0 space-y-1 sm:space-y-0">
            <p className="text-sm font-medium">{issue.name}</p>
            <p className="text-sm text-muted-foreground">{issue.issue}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <IssueStatusDropdown
              initialStatus={issue.status.toLowerCase()}
              onStatusChange={(newStatus) => {
                console.log(`Status changed to ${newStatus} for issue ${issue.email}`)
              }}
            />
            <div className="text-xs text-muted-foreground sm:text-right">
              <p>Assigned: {issue.assignedTo}</p>
              <p>Time: {issue.timeToResolve}</p>
            </div>
          </div>
        </div>
      ))}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Lightbulb className="mr-2 h-5 w-5" />
            AI Recommendation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Based on recent issues, consider implementing a staff training program
            focused on reducing wait times and improving customer interactions.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
