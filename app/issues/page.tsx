"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts"
import { ArrowRight, Search } from 'lucide-react'
import { IssueStatusDropdown } from '@/components/issue-status-dropdown'

const issues = [
  { id: 1, guest: "Rajesh Kumar", issue: "Long wait times", status: "Open", assignedTo: "Anjali", timeToResolve: "-" },
  { id: 2, guest: "Neha Gupta", issue: "Cleanliness concerns", status: "In Progress", assignedTo: "Rahul", timeToResolve: "2h 30m" },
  { id: 3, guest: "Sanjay Verma", issue: "Rude staff", status: "Resolved", assignedTo: "Deepika", timeToResolve: "1h 45m" },
  { id: 4, guest: "Pooja Patel", issue: "Booking system issues", status: "Open", assignedTo: "Arun", timeToResolve: "-" },
  { id: 5, guest: "Amit Shah", issue: "Overcharging complaint", status: "Resolved", assignedTo: "Priyanka", timeToResolve: "3h 15m" },
]

const resolutionTimeData = [
  { name: "Anjali", avgTime: 2.1 },
  { name: "Rahul", avgTime: 2.8 },
  { name: "Deepika", avgTime: 1.8 },
  { name: "Arun", avgTime: 2.5 },
  { name: "Priyanka", avgTime: 2.0 },
]

const issuesTrendData = [
  { month: "Jan", openIssues: 15, resolvedIssues: 45 },
  { month: "Feb", openIssues: 20, resolvedIssues: 50 },
  { month: "Mar", openIssues: 25, resolvedIssues: 55 },
  { month: "Apr", openIssues: 18, resolvedIssues: 62 },
  { month: "May", openIssues: 22, resolvedIssues: 58 },
  { month: "Jun", openIssues: 17, resolvedIssues: 65 },
]

export default function IssuesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredIssues = issues.filter(issue => 
    issue.guest.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === 'all' || issue.status.toLowerCase() === statusFilter)
  )

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Issue Resolution Center</h1>
          <p className="text-muted-foreground mt-1">Track and manage customer issues efficiently</p>
        </div>
        <Button>Create New Issue</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">17</div>
            <p className="text-xs text-muted-foreground">-3 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2h 15m</div>
            <p className="text-xs text-muted-foreground">-15min from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Issues Trend</CardTitle>
            <CardDescription>Monthly open vs resolved issues</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                openIssues: {
                  label: "Open Issues",
                  color: "hsl(var(--chart-1))",
                },
                resolvedIssues: {
                  label: "Resolved Issues",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <LineChart data={issuesTrendData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="openIssues" stroke="var(--color-openIssues)" />
                <Line type="monotone" dataKey="resolvedIssues" stroke="var(--color-resolvedIssues)" />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Resolution Time by Employee</CardTitle>
            <CardDescription>Performance metrics for issue resolution</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                avgTime: {
                  label: "Average Time (hours)",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <BarChart data={resolutionTimeData}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="avgTime" fill="var(--color-avgTime)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Issues</CardTitle>
          <CardDescription>List of recent customer issues and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search issues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-medium">Guest</TableHead>
                <TableHead className="font-medium">Issue</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="font-medium">Assigned To</TableHead>
                <TableHead className="font-medium">Time to Resolve</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredIssues.map((issue) => (
                <TableRow key={issue.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{issue.guest}</TableCell>
                  <TableCell>{issue.issue}</TableCell>
                  <TableCell>
                    <IssueStatusDropdown
                      initialStatus={issue.status.toLowerCase()}
                      onStatusChange={(newStatus) => {
                        console.log(`Status changed to ${newStatus} for issue ${issue.id}`)
                      }}
                    />
                  </TableCell>
                  <TableCell>{issue.assignedTo}</TableCell>
                  <TableCell>{issue.timeToResolve}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full" size="sm">
            View all issues <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
