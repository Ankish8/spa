"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Area, AreaChart, Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts"
import { TrendingUp, TrendingDown, Minus, Calendar, Users, Star, MapPin, Download, ArrowRight } from 'lucide-react'

const locationData = [
  { month: "Jan", Location_A: 4.2, Location_B: 3.8, Location_C: 4.0 },
  { month: "Feb", Location_A: 4.3, Location_B: 3.9, Location_C: 4.1 },
  { month: "Mar", Location_A: 4.1, Location_B: 4.0, Location_C: 4.2 },
  { month: "Apr", Location_A: 4.4, Location_B: 4.1, Location_C: 4.3 },
  { month: "May", Location_A: 4.5, Location_B: 4.2, Location_C: 4.4 },
  { month: "Jun", Location_A: 4.3, Location_B: 4.0, Location_C: 4.2 },
]

const guestTypeData = [
  { month: "Jan", New: 1200, Existing: 2300 },
  { month: "Feb", New: 1400, Existing: 2400 },
  { month: "Mar", New: 1300, Existing: 2600 },
  { month: "Apr", New: 1600, Existing: 2800 },
  { month: "May", New: 1800, Existing: 3000 },
  { month: "Jun", New: 2000, Existing: 3200 },
]

const membershipData = [
  { category: "Overall Satisfaction", Members: 4.6, NonMembers: 4.1 },
  { category: "Service Quality", Members: 4.8, NonMembers: 4.3 },
  { category: "Cleanliness", Members: 4.7, NonMembers: 4.2 },
  { category: "Value for Money", Members: 4.5, NonMembers: 3.9 },
  { category: "Booking Experience", Members: 4.9, NonMembers: 4.4 },
]

const feedbackTrendData = [
  { month: "Jan", Submissions: 1200, AvgRating: 4.1 },
  { month: "Feb", Submissions: 1350, AvgRating: 4.2 },
  { month: "Mar", Submissions: 1500, AvgRating: 4.0 },
  { month: "Apr", Submissions: 1650, AvgRating: 4.3 },
  { month: "May", Submissions: 1800, AvgRating: 4.4 },
  { month: "Jun", Submissions: 2000, AvgRating: 4.2 },
]

const serviceUsageData = [
  { month: "Jan", Massage: 450, Facial: 320, Manicure: 280, Other: 150 },
  { month: "Feb", Massage: 480, Facial: 350, Manicure: 300, Other: 170 },
  { month: "Mar", Massage: 520, Facial: 380, Manicure: 290, Other: 160 },
  { month: "Apr", Massage: 550, Facial: 410, Manicure: 320, Other: 180 },
  { month: "May", Massage: 580, Facial: 440, Manicure: 350, Other: 200 },
  { month: "Jun", Massage: 600, Facial: 460, Manicure: 380, Other: 220 },
]

const TrendIcon = ({ value }: { value: number }) => {
  if (value > 0) return <TrendingUp className="w-4 h-4 text-green-500" />
  if (value < 0) return <TrendingDown className="w-4 h-4 text-red-500" />
  return <Minus className="w-4 h-4 text-gray-500" />
}

export default function TrendsPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('6M')

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Trends & Analysis</h1>
          <p className="text-muted-foreground mt-1">Comprehensive analysis of customer satisfaction and business metrics</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1M">Last Month</SelectItem>
              <SelectItem value="3M">Last 3 Months</SelectItem>
              <SelectItem value="6M">Last 6 Months</SelectItem>
              <SelectItem value="1Y">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.3</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendIcon value={0.2} />
              <span className="ml-1">+0.2 from last period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Feedback</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9,500</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendIcon value={750} />
              <span className="ml-1">+750 from last period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Location</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Location A</div>
            <p className="text-xs text-muted-foreground">4.5 average rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Feedback Rate</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendIcon value={5} />
              <span className="ml-1">+5% from last period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Feedback Trends</CardTitle>
            <CardDescription>Monthly submission volume and average ratings</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                Submissions: {
                  label: "Submissions",
                  color: "hsl(var(--chart-1))",
                },
                AvgRating: {
                  label: "Average Rating",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <LineChart data={feedbackTrendData}>
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line yAxisId="left" type="monotone" dataKey="Submissions" stroke="var(--color-Submissions)" />
                <Line yAxisId="right" type="monotone" dataKey="AvgRating" stroke="var(--color-AvgRating)" />
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" size="sm">
              View detailed report <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Usage Distribution</CardTitle>
            <CardDescription>Monthly breakdown by service type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                Massage: {
                  label: "Massage",
                  color: "hsl(var(--chart-1))",
                },
                Facial: {
                  label: "Facial",
                  color: "hsl(var(--chart-2))",
                },
                Manicure: {
                  label: "Manicure",
                  color: "hsl(var(--chart-3))",
                },
                Other: {
                  label: "Other",
                  color: "hsl(var(--chart-4))",
                },
              }}
              className="h-[300px]"
            >
              <AreaChart data={serviceUsageData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="Other"
                  stackId="1"
                  stroke="var(--color-Other)"
                  fill="var(--color-Other)"
                />
                <Area
                  type="monotone"
                  dataKey="Manicure"
                  stackId="1"
                  stroke="var(--color-Manicure)"
                  fill="var(--color-Manicure)"
                />
                <Area
                  type="monotone"
                  dataKey="Facial"
                  stackId="1"
                  stroke="var(--color-Facial)"
                  fill="var(--color-Facial)"
                />
                <Area
                  type="monotone"
                  dataKey="Massage"
                  stackId="1"
                  stroke="var(--color-Massage)"
                  fill="var(--color-Massage)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" size="sm">
              View service details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="location" className="space-y-4">
        <TabsList>
          <TabsTrigger value="location">By Location</TabsTrigger>
          <TabsTrigger value="guestType">Guest Demographics</TabsTrigger>
          <TabsTrigger value="membership">Membership Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="location" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Location Performance Comparison</CardTitle>
              <CardDescription>Average ratings across all spa locations</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  Location_A: {
                    label: "Location A",
                    color: "hsl(var(--chart-1))",
                  },
                  Location_B: {
                    label: "Location B",
                    color: "hsl(var(--chart-2))",
                  },
                  Location_C: {
                    label: "Location C",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <LineChart data={locationData}>
                  <XAxis dataKey="month" />
                  <YAxis domain={[3.5, 5]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="Location_A" stroke="var(--color-Location_A)" />
                  <Line type="monotone" dataKey="Location_B" stroke="var(--color-Location_B)" />
                  <Line type="monotone" dataKey="Location_C" stroke="var(--color-Location_C)" />
                </LineChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" size="sm">
                View location details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="guestType" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>New vs Existing Guest Feedback</CardTitle>
              <CardDescription>Monthly feedback volume by guest type</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  New: {
                    label: "New Guests",
                    color: "hsl(var(--chart-1))",
                  },
                  Existing: {
                    label: "Existing Guests",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <BarChart data={guestTypeData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="New" fill="var(--color-New)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Existing" fill="var(--color-Existing)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" size="sm">
                View guest analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="membership" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Membership Satisfaction Metrics</CardTitle>
                <CardDescription>Comparison across key satisfaction indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    Members: {
                      label: "Members",
                      color: "hsl(var(--chart-1))",
                    },
                    NonMembers: {
                      label: "Non-Members",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <BarChart data={membershipData} layout="vertical">
                    <XAxis type="number" domain={[3.5, 5]} />
                    <YAxis type="category" dataKey="category" width={150} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="Members" fill="var(--color-Members)" radius={4} />
                    <Bar dataKey="NonMembers" fill="var(--color-NonMembers)" radius={4} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Membership Benefits Analysis</CardTitle>
                <CardDescription>Key differences between member and non-member experiences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Higher Satisfaction</h4>
                  <p className="text-sm text-muted-foreground">Members consistently report 15-20% higher satisfaction across all metrics</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Booking Experience</h4>
                  <p className="text-sm text-muted-foreground">Members rate booking experience 0.5 points higher on average</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Value Perception</h4>
                  <p className="text-sm text-muted-foreground">Members rate value for money 0.6 points higher than non-members</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Service Quality</h4>
                  <p className="text-sm text-muted-foreground">Both groups rate service quality highly, with members giving slightly higher scores</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" size="sm">
                  View membership insights <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
