'use client';

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Lightbulb, Clock, User, Search, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Input } from "@/components/ui/input"

interface Resolution {
  id: string;
  name: string;
  email: string;
  issue: string;
  resolution: string;
  resolvedBy: string;
  timeToResolve: string;
  satisfaction: 'high' | 'medium' | 'low';
  resolvedAt: string;
}

const resolutions: Resolution[] = [
  {
    id: '1',
    name: "Ravi Kumar",
    email: "ravi.kumar@email.com",
    issue: "Spa treatment scheduling conflict",
    resolution: "Rescheduled appointment and offered complimentary aromatherapy session",
    resolvedBy: "Priya",
    timeToResolve: "45m",
    satisfaction: 'high',
    resolvedAt: '2024-03-05T14:30:00'
  },
  {
    id: '2',
    name: "Anita Desai",
    email: "anita.desai@email.com",
    issue: "Massage therapist unavailable",
    resolution: "Arranged alternative therapist with similar expertise",
    resolvedBy: "Deepak",
    timeToResolve: "1h 15m",
    satisfaction: 'medium',
    resolvedAt: '2024-03-05T13:45:00'
  },
  {
    id: '3',
    name: "Sanjay Mehta",
    email: "sanjay.mehta@email.com",
    issue: "Room temperature too cold",
    resolution: "Adjusted HVAC settings and provided extra comfort items",
    resolvedBy: "Neha",
    timeToResolve: "30m",
    satisfaction: 'high',
    resolvedAt: '2024-03-05T12:15:00'
  },
  {
    id: '4',
    name: "Maya Reddy",
    email: "maya.reddy@email.com",
    issue: "Product allergic reaction",
    resolution: "Provided medical assistance and switched to hypoallergenic products",
    resolvedBy: "Rahul",
    timeToResolve: "2h",
    satisfaction: 'medium',
    resolvedAt: '2024-03-05T11:00:00'
  },
]

const getSatisfactionColor = (satisfaction: string) => {
  switch (satisfaction) {
    case 'high':
      return 'bg-green-100 text-green-800'
    case 'medium':
      return 'bg-yellow-100 text-yellow-800'
    case 'low':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getTimeColor = (timeToResolve: string) => {
  const minutes = timeToResolve.includes('h') 
    ? parseInt(timeToResolve.split('h')[0]) * 60 + (parseInt(timeToResolve.split('h')[1].split('m')[0]) || 0)
    : parseInt(timeToResolve.split('m')[0]);

  if (minutes <= 30) return 'text-green-600';
  if (minutes <= 60) return 'text-yellow-600';
  return 'text-red-600';
}

export function IssueResolution() {
  const [searchTerm, setSearchTerm] = useState('')
  const [satisfactionFilter, setSatisfactionFilter] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'satisfaction' | 'time'>('time')

  const filteredResolutions = resolutions
    .filter(resolution => {
      const matchesSearch = resolution.issue.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resolution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resolution.resolution.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSatisfaction = satisfactionFilter === 'all' || resolution.satisfaction === satisfactionFilter
      return matchesSearch && matchesSatisfaction
    })
    .sort((a, b) => {
      if (sortBy === 'satisfaction') {
        const satisfactionOrder = { high: 3, medium: 2, low: 1 }
        return satisfactionOrder[b.satisfaction] - satisfactionOrder[a.satisfaction]
      } else {
        return new Date(b.resolvedAt).getTime() - new Date(a.resolvedAt).getTime()
      }
    })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resolutions..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <select
            className="rounded-md border px-3 py-2 text-sm"
            value={satisfactionFilter}
            onChange={(e) => setSatisfactionFilter(e.target.value)}
          >
            <option value="all">All Satisfaction</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select
            className="rounded-md border px-3 py-2 text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'satisfaction' | 'time')}
          >
            <option value="time">Sort by Time</option>
            <option value="satisfaction">Sort by Satisfaction</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredResolutions.map((resolution) => (
          <Card key={resolution.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarImage src={`https://avatar.vercel.sh/${resolution.name}.png`} alt={resolution.name} />
                  <AvatarFallback>{resolution.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium">{resolution.name}</h3>
                    <Badge variant="outline" className={getSatisfactionColor(resolution.satisfaction)}>
                      {resolution.satisfaction} satisfaction
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{resolution.issue}</p>
                  <p className="text-sm">
                    <CheckCircle2 className="inline-block w-3 h-3 mr-1 text-green-500" />
                    {resolution.resolution}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {resolution.resolvedBy}
                    </span>
                    <span className={`flex items-center gap-1 ${getTimeColor(resolution.timeToResolve)}`}>
                      <Clock className="h-3 w-3" /> {resolution.timeToResolve}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredResolutions.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <AlertCircle className="mx-auto h-8 w-8 mb-2" />
          <p>No resolutions found matching your criteria</p>
        </div>
      )}

      <Card className="mt-6 border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Lightbulb className="mr-2 h-5 w-5 text-green-500" />
            Resolution Insights
          </CardTitle>
          <CardDescription>Analysis of resolution patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            <strong>Success Pattern:</strong> 75% of highly satisfied customers had issues resolved within 45 minutes.
          </p>
          <div className="space-y-2">
            <p className="text-sm font-medium">Key Success Factors:</p>
            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
              <li>Quick response time to initial complaints</li>
              <li>Proactive compensation for inconvenience</li>
              <li>Clear communication throughout resolution</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
