"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'

const overallData = [
  { name: "Jan", average: 4.0, submissions: 2400 },
  { name: "Feb", average: 3.9, submissions: 1398 },
  { name: "Mar", average: 4.1, submissions: 2800 },
  { name: "Apr", average: 4.3, submissions: 3908 },
  { name: "May", average: 4.2, submissions: 4800 },
  { name: "Jun", average: 4.2, submissions: 3800 },
]

const locationData = [
  { name: "Jan", LocationA: 4.2, LocationB: 3.8, LocationC: 4.0 },
  { name: "Feb", LocationA: 4.3, LocationB: 3.9, LocationC: 4.1 },
  { name: "Mar", LocationA: 4.1, LocationB: 4.0, LocationC: 4.2 },
  { name: "Apr", LocationA: 4.4, LocationB: 4.1, LocationC: 4.3 },
  { name: "May", LocationA: 4.5, LocationB: 4.2, LocationC: 4.4 },
  { name: "Jun", LocationA: 4.3, LocationB: 4.0, LocationC: 4.2 },
]

const guestTypeData = [
  { name: "Jan", New: 3.8, Existing: 4.2 },
  { name: "Feb", New: 3.9, Existing: 4.3 },
  { name: "Mar", New: 4.0, Existing: 4.2 },
  { name: "Apr", New: 4.1, Existing: 4.4 },
  { name: "May", New: 4.2, Existing: 4.5 },
  { name: "Jun", New: 4.1, Existing: 4.3 },
]

export function Overview() {
  return (
    <Tabs defaultValue="overall" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overall">Overall</TabsTrigger>
        <TabsTrigger value="location">By Location</TabsTrigger>
        <TabsTrigger value="guestType">By Guest Type</TabsTrigger>
      </TabsList>
      <TabsContent value="overall">
        <Card>
          <CardHeader>
            <CardTitle>Overall Performance</CardTitle>
            <CardDescription>Ratings and submission trends with actionable insights</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={overallData}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis yAxisId="left" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <YAxis yAxisId="right" orientation="right" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="average" stroke="#8884d8" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="submissions" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Improve Overall Performance</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="location">
        <Card>
          <CardHeader>
            <CardTitle>Location Performance</CardTitle>
            <CardDescription>Identify and address location-specific issues</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={locationData}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Tooltip />
                <Line type="monotone" dataKey="LocationA" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="LocationB" stroke="#82ca9d" strokeWidth={2} />
                <Line type="monotone" dataKey="LocationC" stroke="#ffc658" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Optimize Underperforming Locations</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="guestType">
        <Card>
          <CardHeader>
            <CardTitle>Guest Type Analysis</CardTitle>
            <CardDescription>Tailor experiences for new and existing guests</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={guestTypeData}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Tooltip />
                <Line type="monotone" dataKey="New" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="Existing" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Enhance Guest Experience Strategies</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
