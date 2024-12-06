'use client';

import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { ActionButton } from '@/components/action-button';
import { ArrowRight } from 'lucide-react';

interface DataPoint {
  name: string;
  value: number;
  color: string;
}

const data: DataPoint[] = [
  { name: 'Staff Service', value: 85, color: '#22c55e' },
  { name: 'Cleanliness', value: 78, color: '#3b82f6' },
  { name: 'Treatment Quality', value: 92, color: '#8b5cf6' },
  { name: 'Ambiance', value: 88, color: '#ec4899' },
  { name: 'Value for Money', value: 75, color: '#f59e0b' },
  { name: 'Booking Experience', value: 82, color: '#06b6d4' },
];

export function SentimentSummary() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  return (
    <div>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            onMouseMove={(state) => {
              if (state.activeTooltipIndex !== undefined && state.activePayload?.[0]) {
                setSelectedMetric(state.activePayload[0].payload.name);
              }
            }}
            onMouseLeave={() => setSelectedMetric(null)}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="name" type="category" width={100} />
            <Tooltip />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={entry.color}
                  fillOpacity={selectedMetric === entry.name ? 1 : 0.75}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-muted-foreground">
          Based on {data.length} key metrics
        </div>
        <ActionButton>
          View Details <ArrowRight className="ml-2 h-4 w-4" />
        </ActionButton>
      </div>
    </div>
  );
}