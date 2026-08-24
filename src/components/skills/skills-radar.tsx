'use client';

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

export default function CompetenceRadar({ data }: any) {
  const chartData = data.map((c: any) => ({
    subject: c.title,
    A: c.level,
    fullMark: 5,
  }));

  return (
    <div className='w-full h-[400px]'>
      <ResponsiveContainer>
        <RadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis domain={[0, 5]} />
          <Radar name='niveau' dataKey='A' stroke='#6366f1' fill='#6366f1' fillOpacity={0.4} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
