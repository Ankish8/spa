'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Overview } from '@/components/overview'
import { SentimentSummary } from '@/components/sentiment-summary'
import { TrendingDown, TrendingUp, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Metrics Card Component
interface MetricCardProps {
  title: string;
  value: string;
  trend: 'up' | 'down';
  change: string;
}

const MetricCard = ({ title, value, trend, change }: MetricCardProps) => {
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
  const trendColor = trend === 'up' ? 'text-green-500' : 'text-red-500';

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-0">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <TrendIcon className={`h-4 w-4 ${trendColor}`} />
        </div>
        <div className="flex items-baseline justify-between space-y-0 mt-2">
          <h3 className="text-2xl font-semibold">{value}</h3>
          <p className={`text-xs ${trendColor}`}>{change}</p>
        </div>
      </CardContent>
    </Card>
  )
}

const recommendations = [
  {
    title: "High Priority: Wait Time Management",
    description: "Customer wait time complaints increased across all services",
    impact: 'high',
  },
  {
    title: "Service Quality Alert",
    description: "Decline in customer service ratings at Location B",
    impact: 'medium',
  }
]

export default function DashboardPage() {
  const metrics = [
    {
      title: "Customer Satisfaction",
      value: "85%",
      trend: "up" as const,
      change: "+0.1 from last month"
    },
    {
      title: "Positive Sentiment",
      value: "78%",
      trend: "up" as const,
      change: "+2% from last month"
    },
    {
      title: "Unresolved Issues",
      value: "12",
      trend: "down" as const,
      change: "-3 from last week"
    },
    {
      title: "Feedback Submissions",
      value: "432",
      trend: "up" as const,
      change: "+18% this week"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Spa Analytics Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Key metrics and areas for improvement</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Overview />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sentiment Analysis</CardTitle>
            <CardDescription>Customer feedback analysis</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <SentimentSummary />
          </CardContent>
        </Card>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">AI Recommendations</h2>
          <Button variant="outline" size="sm" asChild>
            <a href="/recommendations">View All</a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {recommendations.map((rec, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  {rec.title}
                </CardTitle>
                <CardDescription>{rec.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium ${
                  rec.impact === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {rec.impact === 'high' ? 'High Impact' : 'Medium Impact'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}