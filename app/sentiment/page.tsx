"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts'
import { ThumbsUp, Smile, Frown, Meh, TrendingUp, TrendingDown, Minus } from 'lucide-react'

const positiveKeywords = [
  { text: 'Relaxing', value: 64, trend: 'up' },
  { text: 'Professional', value: 58, trend: 'up' },
  { text: 'Clean', value: 52, trend: 'down' },
  { text: 'Friendly', value: 48, trend: 'up' },
  { text: 'Luxurious', value: 42, trend: 'same' },
  { text: 'Peaceful', value: 38, trend: 'down' },
  { text: 'Skilled', value: 34, trend: 'up' },
  { text: 'Attentive', value: 30, trend: 'same' },
]

const negativeKeywords = [
  { text: 'Expensive', value: 28, trend: 'up' },
  { text: 'Noisy', value: 24, trend: 'down' },
  { text: 'Crowded', value: 22, trend: 'up' },
  { text: 'Rushed', value: 20, trend: 'same' },
  { text: 'Unprofessional', value: 18, trend: 'down' },
  { text: 'Dirty', value: 16, trend: 'up' },
  { text: 'Rude', value: 14, trend: 'down' },
  { text: 'Disappointing', value: 12, trend: 'same' },
]

const sentimentData = [
  { name: 'Very Positive', value: 35, color: '#4ade80' },
  { name: 'Positive', value: 40, color: '#86efac' },
  { name: 'Neutral', value: 15, color: '#d1d5db' },
  { name: 'Negative', value: 7, color: '#fca5a5' },
  { name: 'Very Negative', value: 3, color: '#f87171' },
]

const locations = ['All Locations', 'Location A', 'Location B', 'Location C']

const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />
  if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />
  return <Minus className="w-4 h-4 text-gray-500" />
}

export default function SentimentPage() {
  const [selectedLocation, setSelectedLocation] = useState('All Locations')

  return (
    <div className="max-w-full px-4 md:px-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Sentiment Insights</h1>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Sentiment</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Positive Reviews</CardTitle>
            <Smile className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Negative Reviews</CardTitle>
            <Frown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">432</div>
            <p className="text-xs text-muted-foreground">-3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Neutral Reviews</CardTitle>
            <Meh className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">678</div>
            <p className="text-xs text-muted-foreground">+1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Sentiment Distribution</CardTitle>
          <CardDescription>Overview of sentiment across all reviews</CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <div className="w-full aspect-[2/1]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value">
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="positive" className="space-y-4">
        <TabsList>
          <TabsTrigger value="positive">Positive Keywords</TabsTrigger>
          <TabsTrigger value="negative">Areas for Improvement</TabsTrigger>
        </TabsList>
        <TabsContent value="positive">
          <Card>
            <CardHeader>
              <CardTitle>Positive Keywords</CardTitle>
              <CardDescription>Most frequently mentioned positive aspects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {positiveKeywords.map((keyword) => (
                  <div key={keyword.text} className="bg-green-100 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{keyword.text}</span>
                      <TrendIcon trend={keyword.trend} />
                    </div>
                    <div className="text-2xl font-bold">{keyword.value}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="negative">
          <Card>
            <CardHeader>
              <CardTitle>Areas for Improvement</CardTitle>
              <CardDescription>Most frequently mentioned areas for improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {negativeKeywords.map((keyword) => (
                  <div key={keyword.text} className="bg-red-100 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{keyword.text}</span>
                      <TrendIcon trend={keyword.trend} />
                    </div>
                    <div className="text-2xl font-bold">{keyword.value}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}