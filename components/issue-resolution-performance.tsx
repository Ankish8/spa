"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { name: "Anjali", avgResolutionTime: 2.1, issuesResolved: 48 },
  { name: "Rahul", avgResolutionTime: 2.8, issuesResolved: 42 },
  { name: "Deepika", avgResolutionTime: 1.8, issuesResolved: 55 },
  { name: "Arun", avgResolutionTime: 2.5, issuesResolved: 44 },
  { name: "Priyanka", avgResolutionTime: 2.0, issuesResolved: 51 },
]

export function IssueResolutionPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Issue Resolution Performance</CardTitle>
        <CardDescription>Average resolution time and issues resolved by team member</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis 
              yAxisId="left" 
              orientation="left" 
              stroke="#8884d8" 
              label={{ value: 'Avg. Resolution Time (hours)', angle: -90, position: 'insideLeft' }} 
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="#82ca9d" 
              label={{ value: 'Issues Resolved', angle: 90, position: 'insideRight' }} 
            />
            <Tooltip />
            <Bar yAxisId="left" dataKey="avgResolutionTime" fill="#8884d8" name="Avg. Resolution Time (hours)" />
            <Bar yAxisId="right" dataKey="issuesResolved" fill="#82ca9d" name="Issues Resolved" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
