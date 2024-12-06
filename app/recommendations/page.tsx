'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Lightbulb, TrendingUp, AlertTriangle, ArrowRight, TrendingDown } from 'lucide-react'

const recommendations = [
  {
    title: "High Priority: Wait Time Management",
    description: "Customer wait time complaints increased across all services",
    icon: TrendingUp,
    trend: "+15%",
    trendDirection: 'up',
    impact: 'high',
    actions: ["Review peak hour staffing", "Optimize booking intervals", "Implement queue management"]
  },
  {
    title: "Service Quality Alert",
    description: "Decline in customer service ratings at Location B",
    icon: AlertTriangle,
    trend: "-0.5",
    trendDirection: 'down',
    impact: 'medium',
    actions: ["Staff training program", "Customer interaction review", "Service standards audit"]
  },
  {
    title: "Cleanliness Standards",
    description: "Negative mentions about cleanliness have increased",
    icon: AlertTriangle,
    trend: "+5%",
    trendDirection: 'up',
    impact: 'medium',
    actions: ["Update cleaning protocols", "Staff refresher training", "Facility audit"]
  },
  {
    title: "Customer Retention Opportunity",
    description: "Quick response to negative feedback shows positive results",
    icon: Lightbulb,
    trend: "+30%",
    trendDirection: 'up',
    impact: 'high',
    actions: ["24h response protocol", "Feedback tracking system", "Staff response training"]
  }
]

export default function RecommendationsPage() {
  return (
    <div className="p-4">
      <div className="max-w-[1600px] mx-auto space-y-4">
        <div>
          <h1 className="text-3xl font-bold">Recommendations</h1>
          <p className="text-muted-foreground">Data-driven insights to improve your spa business</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {recommendations.map((rec, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    <rec.icon className="h-4 w-4" />
                    {rec.title}
                  </CardTitle>
                  <div className={`px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 ${
                    rec.trendDirection === 'up' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                  }`}>
                    {rec.trendDirection === 'up' ? 
                      <TrendingUp className="h-3 w-3" /> : 
                      <TrendingDown className="h-3 w-3" />
                    }
                    {rec.trend}
                  </div>
                </div>
                <CardDescription className="mt-1">
                  {rec.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <ul className="space-y-1">
                  {rec.actions.map((action, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
                      {action}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2 mt-auto">
                <Button variant="ghost" size="sm" className="ml-auto hover:bg-background">
                  Take Action <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
